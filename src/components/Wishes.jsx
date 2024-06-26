import { useRef, useState, useEffect } from "react";
import { FaDove } from "react-icons/fa";
import {
  BsClock,
  BsFillCheckCircleFill,
  BsFillQuestionCircleFill,
  BsFillXCircleFill,
} from "react-icons/bs";
import loading from "../assets/loading/loading.png";
import TimeAgo from "react-timeago";
import bahasaStrings from "react-timeago/lib/language-strings/id";
import buildFormatter from "react-timeago/lib/formatters/buildFormatter";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

const Wishes = () => {
  const formatter = buildFormatter(bahasaStrings);
  const timestamp = Date.now();

  const nameRef = useRef(null);
  const [name, setName] = useState("");
  const [nameIsValid, setNameIsValid] = useState(false);
  const [nameTouched, setNameTouched] = useState(false);

  const messageRef = useRef(null);
  const [message, setMessage] = useState("");
  const [messageIsValid, setMessageIsValid] = useState(false);
  const [messageTouched, setMessageTouched] = useState(false);
  const [messageLength, setMessageLength] = useState(500);

  const presenceRef = useRef(null);
  const [presence, setPresence] = useState(3);

  const [data, setData] = useState([]);
  const [countedData, setCountedData] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    const response = await fetch(
      "https://simple-wedding-website-default-rtdb.firebaseio.com/data.json"
    );
    const data = await response.json();

    const loadedData = [];

    for (const key in data) {
      loadedData.push({
        id: key,
        name: data[key].name,
        message: data[key].message,
        presence: data[key].presence,
        created_at: data[key].created_at,
      });
    }
    setData(loadedData);
    setCountedData(loadedData.length);
  };

  useEffect(() => {
    fetchData();
    setTimeout(() => {
      fetchData();
    }, 10000);
  }, []);

  const nameInputChangeHandler = (e) => {
    setName(e.target.value);
    if (e.target.value.trim() !== "") {
      setNameIsValid(true);
    }
  };

  const nameInputBlurHandler = () => {
    setNameTouched(true);
    if (name.trim() === "") {
      setNameIsValid(false);
    }
  };

  const messageInputChangeHandler = (e) => {
    setMessage(e.target.value);
    if (e.target.value.trim() !== "") {
      setMessageIsValid(true);
    }
    const maxLength = e.target.getAttribute("maxLength");
    setMessageLength(maxLength - e.target.value.length);
  };

  const messageInputBlurHandler = () => {
    setMessageTouched(true);
    if (message.trim() === "") {
      setMessageIsValid(false);
    }
  };

  const presenceInputChangeHandler = (e) => {
    setPresence(e.target.value);
  };

  //! Submit Handler
  const submitHandler = async (e) => {
    e.preventDefault();
    setNameTouched(true);
    if (name.trim() === "") {
      setNameIsValid(false);
      return;
    }
    setNameIsValid(true);

    setIsLoading(true);
    await fetch(
      "https://simple-wedding-website-default-rtdb.firebaseio.com/data.json",
      {
        method: "POST",
        body: JSON.stringify({
          name: nameRef.current.value,
          message: messageRef.current.value,
          presence: +presence,
          created_at: timestamp,
        }),
      }
    );
    console.log("Proses submit berhasil");
    fetchData();
    console.log("Ini adalah log saat fetching data setelah submit");
    setIsLoading(false);
    toast.success("Ucapan berhasil dikirim");
    setName("");
    nameRef.current.value = "";
    setMessage("");
    messageRef.current.value = "";
    setMessageLength(500);
    setPresence(3);
    presenceRef.current.value = 3;
  };

  //* Classes
  //* Style for name input
  const nameInputIsInvalid = !nameIsValid && nameTouched;
  const nameInputClasses = nameInputIsInvalid
    ? "border border-red-600 bg-red-200"
    : "border border-[#e0dcd1]";
  //* Style for message input
  const messageInputIsInvalid = !messageIsValid && messageTouched;
  const messageInputClasses = messageInputIsInvalid
    ? "border border-red-600 bg-red-200"
    : "border border-[#e0dcd1]";
  //* End of Classes

  // ! Return
  return (
    <section className="w-11/12 lg:w-9/12 mx-auto my-20 font-platypi text-center">
      <ToastContainer />
      <motion.h1
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 1 }}
        transition={{ duration: 1 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        className="text-3xl md:text-4xl lg:text-5xl text-gold"
      >
        Kirim Ucapan
      </motion.h1>
      <div className="w-full rounded-xl bg-white shadow-md shadow-neutral-500 border border-neutral-300 mt-10">
        <div className="px-5 py-3">
          <p className="flex items-center justify-start gap-2 font-platypi text-[.8rem] text-[#555] md:text-sm lg:text-base">
            <FaDove size={18} color="#555" />{" "}
            {countedData.length === 0 ? "0 Ucapan" : countedData + " Ucapan"}
          </p>
        </div>
        <hr className="w-full border-[0.5px] border-[#e0dcd1]" />
        <div className="p-5">
          <form onSubmit={submitHandler} className="font-platypi">
            <div className="flex flex-col p-0">
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <input
                    className={
                      nameInputClasses +
                      " w-full font-platypi rounded-md px-2 py-1 text-base"
                    }
                    type="text"
                    placeholder="Nama"
                    ref={nameRef}
                    onChange={nameInputChangeHandler}
                    onBlur={nameInputBlurHandler}
                    required
                  />
                  {nameInputIsInvalid && (
                    <p className="text-start text-base text-red-500">
                      Nama tidak boleh kosong.
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <textarea
                    className={
                      messageInputClasses +
                      " resize-none rounded-md px-2 py-1 text-base"
                    }
                    placeholder="Ucapan"
                    cols="30"
                    rows="6"
                    maxLength="500"
                    ref={messageRef}
                    onChange={messageInputChangeHandler}
                    onBlur={messageInputBlurHandler}
                    defaultValue={message}
                    required
                  ></textarea>
                  <div
                    className={
                      messageInputIsInvalid === true
                        ? "flex justify-between"
                        : "flex justify-end"
                    }
                  >
                    {messageInputIsInvalid && (
                      <p className="text-start text-base text-red-500">
                        Pesan tidak boleh kosong.
                      </p>
                    )}
                    <div className="mb-5 flex justify-end text-[.8rem] md:text-sm lg:text-base">
                      <span>{messageLength}</span>
                    </div>
                  </div>
                </div>
              </div>
              <select
                className="mb-5 rounded-lg border border-[#e0dcd1] px-2 py-1 text-base"
                defaultValue="3"
                ref={presenceRef}
                onChange={presenceInputChangeHandler}
              >
                <option value="1">Hadir</option>
                <option value="2">Tidak Hadir</option>
                <option value="3">Ragu-Ragu</option>
              </select>
            </div>
            <div className="flex items-center justify-end">
              <button
                className="font-lato mb-5 flex items-center justify-center rounded-md bg-green-500 px-4 py-2 text-right text-[.8rem] text-white hover:bg-green-600 md:text-sm lg:text-base"
                type="submit"
              >
                Kirim
              </button>
            </div>
          </form>
          {countedData.length === 0 ? (
            <p className="text-center font-poppins text-base my-5 text-neutral-500">
              Semua ucapan akan tampil disini.
              <br />
              Ingin mengucapkan sesuatu?
            </p>
          ) : isLoading ? (
            <div className="flex items-center justify-center">
              <img
                src={loading}
                alt="Loading"
                width={30}
                className="animate-spin"
              />
              <p className="ms-2 font-poppins text-[.8rem] md:text-sm lg:text-base">
                Loading...
              </p>
            </div>
          ) : (
            <div className="max-h-[500px] overflow-y-auto">
              {data
                .sort((a, b) => (a.created_at < b.created_at ? 1 : -1))
                .map((item, index) => {
                  return (
                    <div key={item.id}>
                      <div className="flex flex-col gap-1 px-5 py-3 font-platypi">
                        <div className="flex items-center gap-2 text-[.8rem] md:text-sm lg:text-sm">
                          <div className="max-w-[200px] overflow-hidden text-ellipsis whitespace-nowrap text-sky-600 md:max-w-[500px] lg:max-w-[700px]">
                            {item.name}
                          </div>
                          {item.presence === 1 ? (
                            <span className="flex items-center gap-1 rounded-sm bg-green-500 px-1 text-white">
                              <BsFillCheckCircleFill size={10} /> Hadir
                            </span>
                          ) : item.presence === 2 ? (
                            <span className="flex items-center gap-1 rounded-sm bg-red-500 px-1 text-white">
                              <BsFillXCircleFill size={10} /> Tidak Hadir
                            </span>
                          ) : (
                            item.presence === 3 && (
                              <span className="flex items-center gap-1 rounded-sm bg-yellow-500 px-1 text-white">
                                <BsFillQuestionCircleFill size={10} /> Ragu-Ragu
                              </span>
                            )
                          )}
                        </div>
                        <div className="flex items-center gap-1 text-[.6rem] md:text-[.7rem] lg:text-[.7rem]">
                          <BsClock />
                          <TimeAgo
                            date={item.created_at}
                            formatter={formatter}
                            className="text-slate-600"
                          />
                        </div>
                        <div className="text-start text-[.8rem] md:text-sm lg:text-sm">
                          {item.message}
                        </div>
                      </div>
                      {countedData - 1 !== index && (
                        <hr className="mx-5 border-[0.5px] border-slate-200" />
                      )}
                    </div>
                  );
                })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Wishes;
