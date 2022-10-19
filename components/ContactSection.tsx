import React from "react";

const ContactSection = () => {
  return (
    <div className="flex">
      <form action="" className="pl-3 pr-5">
        <input
          className="p-3 w-full border-b-2 border-black outline-0 bg-transparent"
          placeholder="Nombre *"
          type="text"
        />
        <input
          className="p-3 mt-4 w-full border-b-2 border-black outline-0 bg-transparent"
          placeholder="Email *"
          type="text"
        />
        <input
          className="p-3 mt-4 w-full border-b-2 border-black outline-0 bg-transparent"
          placeholder="Teléfono *"
          type="text"
        />
        <textarea
          className="resize-none pt-3 px-3 h-[12.5rem] mt-4 w-full border-b-2 border-black outline-0 bg-transparent"
          placeholder="Mensaje *"
        />
        <button className="bg-black text-white mt-4 block w-full py-3 hover:bg-[#444] transition-colors ">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default ContactSection;
