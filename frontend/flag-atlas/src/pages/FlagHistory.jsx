import { motion } from "framer-motion";
import flagHistory from "../flagHistoryData";
import CountryDetail from "./CountryDetails";
function FlagHistory() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section>
        <div className="relative bg-black">
          <img
            src="flag-bg.png"
            alt="Flag hero image"
            className=" w-full object-cover h-screen"
          ></img>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 to-transparent" />
          <div className="absolute px-28 top-9 space-y-5 left-2 z-10">
            <h1 className="text-6xl tracking-wider font-bold font-inter text-white">
              History of Flags
            </h1>
            <p
              dangerouslySetInnerHTML={{ __html: flagHistory.overview }}
              className="text-2xl leading-10 text-white text-justify "
            />
          </div>
        </div>
      </section>
      <section>
        <div className="px-28 text-gray-900 font-inter py-14">
          <h1 className="text-6xl tracking-wider font-bold  ">Vexillology</h1>
          <br></br>
          <p
            dangerouslySetInnerHTML={{ __html: flagHistory.vexillology }}
            className="text-2xl leading-10  text-justify "
          />
          <br></br>
          <h1 className="mt-12 text-6xl tracking-wider font-bold">
            Types of Flags
          </h1>
          <br></br>
          <h1 className="mt-12 text-3xl tracking-wider font-semibold">
            National Flags
          </h1>
          <p className="text-2xl mt-2 leading-10  text-justify ">
            {flagHistory.national}
          </p>
          <br></br>
          <h1 className="mt-12 text-3xl tracking-wider font-semibold">
            Regional and Local Flags
          </h1>
          <p className="text-2xl mt-2 leading-10  text-justify ">
            {flagHistory.national}
          </p>
          <br></br>
          <h1 className="mt-12 text-3xl tracking-wider font-semibold">
            Military Flags
          </h1>
          <p className="text-2xl mt-2 leading-10  text-justify ">
            {flagHistory.military}
          </p>
          <br></br>
          <h1 className="mt-12 text-3xl tracking-wider font-semibold">
            Organizational Flags
          </h1>
          <p className="text-2xl mt-2 leading-10  text-justify ">
            {flagHistory.organization}
          </p>
          <br></br>
          <h1 className="mt-12 text-3xl tracking-wider font-semibold">
            Historical Flags
          </h1>
          <p className="text-2xl mt-2 leading-10  text-justify ">
            {flagHistory.history}
          </p>
        </div>
      </section>
    </motion.div>
  );
}

export default FlagHistory;
