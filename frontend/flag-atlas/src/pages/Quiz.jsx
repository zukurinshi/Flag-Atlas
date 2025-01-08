import { motion } from "framer-motion";

function Quiz() {
  return (
    <motion.div>
      <div className="w-full px-28 pt-20 pb-20">
        <h2 className="font-inter font-bold text-3xl text-center pb-12">Choose a category</h2>
        <div className="grid grid-cols-4 gap-x-4 gap-y-10 font-sans text-white">
          <div className="bg-red-600 rounded-xl p-5 text-center">
            <h3 className="font-bold text-xl">Country flags</h3>
            <img
              className="object-cover mt-5 w-full rounded-lg h-44"
              src="https://img.freepik.com/free-vector/south-america-flags-element-collection_23-2149706032.jpg?t=st=1733300672~exp=1733304272~hmac=93d90146fd6a8aab3244788b71656f457c1264edfd3dba76214fb36e0802c7a9&w=740"
            ></img>
          </div>
          <div className="bg-blue-600 rounded-xl text-xl p-5 text-center">
            <h3 className="font-bold">Capitals</h3>
            <img
              className="object-cover mt-5 w-full rounded-lg h-44"
              src="https://img.freepik.com/free-vector/colorful-landmarks-skyline_23-2148420128.jpg?t=st=1733297368~exp=1733300968~hmac=6c845fa2d1bcc75c55d57b3066476db9485b8ab726f2f8e6bb519050253d2d34&w=900"
            ></img>
          </div>
          <div className="bg-green-600 rounded-xl text-xl p-5 text-center">
            <h3 className="font-bold">Landmarks</h3>
            <img
              className="object-cover mt-5 w-full rounded-lg h-44"
              src="https://img.freepik.com/free-vector/rome-concept-illustration_114360-16082.jpg?t=st=1733300013~exp=1733303613~hmac=0e53a2ad478a6f8b5032890f548c10c300b30343554deaefa5853ced8bd56c44&w=900"
            ></img>
          </div>
          <div className="bg-yellow-500 rounded-xl text-xl p-5 text-center">
            <h3 className="font-bold">Country Trivia</h3>
            <img
              className="object-cover mt-5 w-full rounded-lg h-44"
              src="https://img.freepik.com/free-vector/colorful-landmarks-skyline_23-2148413073.jpg?t=st=1733300144~exp=1733303744~hmac=7be1a6d601622b17b8000b9e7ad7e5137af0ed2868d38ac8fae0a2dbd264084e&w=900"
            ></img>
          </div>
          <div className="bg-orange-500 rounded-xl w-full text-xl p-5 text-center">
            <h3 className="font-bold">World Map</h3>
            <img className="object-cover mt-5 w-full rounded-lg h-44" src="https://img.freepik.com/free-photo/free-blank-map-asia_53876-145019.jpg?t=st=1733299366~exp=1733302966~hmac=23d2e6f5ac496a0d3875e6c1042b38fa67523d07d56a3e197d88081fc7ae7637&w=996"></img>
          </div>
          <div className="bg-indigo-400 rounded-xl w-full text-xl p-5 text-center">
            <h3 className="font-bold">Mixup</h3>
            <img className="object-cover mt-5 w-full rounded-lg h-44" src="https://img.freepik.com/free-vector/two-blue-cycle-arrows_78370-7799.jpg?t=st=1733299369~exp=1733302969~hmac=439829ad01b1ed170ab329cf20a75570885750caeffed646f2121f1ab8387d5a&w=740"></img>
          </div>
          https://img.freepik.com/free-vector/colorful-landmarks-skyline_23-2148413073.jpg?t=st=1733300144~exp=1733303744~hmac=7be1a6d601622b17b8000b9e7ad7e5137af0ed2868d38ac8fae0a2dbd264084e&w=900
          https://img.freepik.com/free-vector/colorful-landmarks-skyline_23-2148430418.jpg?t=st=1733298006~exp=1733301606~hmac=e87ffd62202742547feecc58cf99d2e25c067dc81a8473f3afcded1337d3d79d&w=900
        </div>
      </div>
    </motion.div>
  );
}

export default Quiz;
