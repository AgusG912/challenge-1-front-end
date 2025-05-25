import { useEffect, useState } from "react";
import { welcomeMessage, getRandomMessage } from "../../../Schemas/Home/motivationalMessages";

export const Home = () => {
  const [message, setMessage]= useState(welcomeMessage);

  useEffect(() => {
    setMessage(getRandomMessage());
  }, []);

  return (
    <div className='min-h-full min-w-full flex flex-col justify-center items-center'>
      <div className="text-center">
        <h1 className="text-[70px]">Bienvenido 😊</h1>
        <h3 className="text-gray-300 text-[20px]">{message}</h3>
      </div>
    </div>
  );
};
