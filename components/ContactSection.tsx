import React from "react";
import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  companyName: string;
  email: string;
  number?: string;
  message: string;
};

const ContactSection = () => {
  const {
    register,
    formState: { errors },
  } = useForm<FormData>();

  return (
    <section
      className="w-full bg-[url('https://www.digitalsilk.com/wp-content/themes/digitalsilk/assets/images/bg/exp-waves-m.jpg')] px-5
      md:bg-[url('https://www.digitalsilk.com/wp-content/themes/digitalsilk/assets/images/bg/raq-bg-bot--d.jpg')] bg-repeat-x bg-cover py-32"
      id="contactSection"
    >
      <form
        className="p-[1.875rem] bg-[#1a315d] max-w-[35rem] mx-auto text-white text-[1rem] md:text-[1.3125rem]"
        name="contact v2"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <h3 className="text-[1.3125rem] md:text-[2.375rem] uppercase font-bold mb-10 text-center">
          Obtén una cotización
        </h3>
        <input type="hidden" name="form-name" value="contact v2" />
        <div hidden>
          <input name="bot-field" />
        </div>

        <input
          {...register("name", { required: true })}
          className="p-3 w-full border-b-[1px] border-[#04d0f1] outline-0 bg-transparent "
          placeholder="Nombre"
          type="text"
        />
        <div className="mb-[2.1875rem] h-[0.9375rem]">
          {errors.name && (
            <span className="text-red-600 text-xs ">
              Este campo es necesario
            </span>
          )}
        </div>
        <input
          {...register("companyName", { required: true })}
          className="p-3 w-full border-b-[1px] border-[#04d0f1] outline-0 bg-transparent"
          placeholder="Nombre de empresa"
          type="text"
        />
        <div className="mb-[2.1875rem] h-[0.9375rem]">
          {errors.companyName && (
            <span className="text-red-600 text-xs ">
              Este campo es necesario
            </span>
          )}
        </div>

        <input
          {...register("email", { required: true })}
          className="p-3  w-full border-b-[1px] border-[#04d0f1] outline-0 bg-transparent "
          placeholder="Email"
          type="text"
        />
        <div className="mb-[2.1875rem] h-[0.9375rem]">
          {errors.email && (
            <span className="text-red-600 text-xs">
              Este campo es necesario
            </span>
          )}
        </div>

        <input
          {...register("number")}
          className="p-3  w-full border-b-[1px] border-[#04d0f1] outline-0 bg-transparent mb-[2.1875rem]"
          placeholder="Teléfono"
          type="text"
        />
        <textarea
          {...register("message", { required: true })}
          className="resize-none pt-3 px-3 h-[12.5rem] w-full border-b-[1px] border-[#04d0f1] outline-0 bg-transparent"
          placeholder="Tu Mensaje"
        />
        <div className="mb-[2.1875rem] h-[0.9375rem]">
          {errors.message && (
            <span className="text-red-600 text-xs">
              Este campo es necesario
            </span>
          )}
        </div>

        <button
          type="submit"
          className="bg-black text-white mt-4 block w-full py-3 hover:bg-[#444] transition-colors "
        >
          Enviar
        </button>
      </form>
    </section>
  );
};

export default ContactSection;
