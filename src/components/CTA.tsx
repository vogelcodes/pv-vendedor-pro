import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

import ptBR from "react-phone-number-input/locale/pt-BR.json";
import flags from "react-phone-number-input/flags";
import { formatPhoneNumber } from "react-phone-number-input";

type CTAProps = {
  ctaOption?: string;
  price?: boolean;
  label?: string;
  params?: string;
};

export default function CTA({
  price = false,
  label = "Quero aumentar minha produção de leite",
  ctaOption = "0",
  params,
}: CTAProps) {
  type E164Number = string | undefined;
  const [isOpen, setIsOpen] = useState(false);
  const [cta, setCta] = useState("");
  const [value, setValue] = useState<E164Number>();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  function closeModal() {
    setIsOpen(false);
  }

  function openModal(option: string) {
    setCta(option);
    console.log(ctaOption);
    setIsOpen(true);
  }
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const formData = new FormData();

    formData.append("name", name);
    formData.append("email", email);
    formData.append("phoneNumber", value);
    formData.append("cta", cta);
    formData.append("url", window.location.pathname);
    formData.append("utm", params);

    await fetch("https://vogel-codes.hosting.vogelcodes.com/api/lead", {
      method: "POST",
      headers: {},
      body: formData,
    });
    // fetch(gsheetUrl,)
    console.log(formatPhoneNumber(value || ""));
    window.open(
      `https://pay.hotmart.com/O84147403X?email=${email}&phoneac=${
        formatPhoneNumber(value ?? "") || ""
        // value
      }&name=${name}&${params}`
    );
  }

  return (
    <>
      <div className="flex w-full flex-col items-center rounded-sm bg-[#1A2440] text-slate-50">
        <div className="mt-5 w-full text-center">
          {/* <a href="https://instagram.com/carolina.procaci"> */}
          {/* <a href="https://pay.hotmart.com/O84147403X"> */}

          <button
            onClick={() => openModal(ctaOption)}
            data-umami-event={`cta-${ctaOption}-click`}
            className="text-white my-2 rounded-lg border-b-4 border-b-[#236C0F] bg-[#207928] px-16 py-3 text-xl font-extrabold uppercase text-[#FEFEFE] hover:scale-[104%] hover:border-b-[#44972d] hover:bg-[#236C0F] lg:max-w-md lg:py-5"
          >
            {label}
          </button>
          {/* </a> */}

          {/* </a> */}
          {price ? (
            <p>
              12x
              <span className="mb-[14.4px] ml-1 mt-6 text-center text-[25px] font-extrabold uppercase leading-[29.17px] tracking-[-25] lg:text-[31.25px]">
                R$29,64
              </span>{" "}
              <br /> ou R$297,00 à vista
            </p>
          ) : (
            <></>
          )}
          <div className="">
            <img
              className="mx-auto px-4"
              alt="Meios de Pagamento"
              src="/cta/pagamentos.png"
              width={300}
              height={33}
            />
          </div>
        </div>
        <div className="m-4 grid w-full grid-cols-4 px-4 lg:max-w-3xl">
          <div className="flex flex-col  gap-4 items-center">
            <div className="h-10 w-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                fill="#fff"
              >
                <path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z" />
              </svg>{" "}
            </div>
            <p className="text-center text-sm font-bold lg:text-[20.6px]">
              1 ano de acesso
            </p>
          </div>
          <div className="flex flex-col  gap-4 items-center">
            <div className="h-10 w-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                fill="#fff"
              >
                <path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.7 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z" />
              </svg>{" "}
            </div>
            <p className="text-center text-sm font-bold lg:text-[20.6px]">
              2 mentorias individuais
            </p>
          </div>
          <div className="flex flex-col  gap-4 items-center">
            <div className="h-10 w-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                fill="#fff"
              >
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
              </svg>{" "}
            </div>
            <p className="text-center text-sm font-bold lg:text-[20.6px]">
              Suporte no WhatsApp
            </p>
          </div>
          <div className="flex flex-col  gap-4 items-center">
            <div className="h-10 w-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                fill="#fff"
              >
                <path d="M173.8 5.5c11-7.3 25.4-7.3 36.4 0L228 17.2c6 3.9 13 5.8 20.1 5.4l21.3-1.3c13.2-.8 25.6 6.4 31.5 18.2l9.6 19.1c3.2 6.4 8.4 11.5 14.7 14.7L344.5 83c11.8 5.9 19 18.3 18.2 31.5l-1.3 21.3c-.4 7.1 1.5 14.2 5.4 20.1l11.8 17.8c7.3 11 7.3 25.4 0 36.4L366.8 228c-3.9 6-5.8 13-5.4 20.1l1.3 21.3c.8 13.2-6.4 25.6-18.2 31.5l-19.1 9.6c-6.4 3.2-11.5 8.4-14.7 14.7L301 344.5c-5.9 11.8-18.3 19-31.5 18.2l-21.3-1.3c-7.1-.4-14.2 1.5-20.1 5.4l-17.8 11.8c-11 7.3-25.4 7.3-36.4 0L156 366.8c-6-3.9-13-5.8-20.1-5.4l-21.3 1.3c-13.2 .8-25.6-6.4-31.5-18.2l-9.6-19.1c-3.2-6.4-8.4-11.5-14.7-14.7L39.5 301c-11.8-5.9-19-18.3-18.2-31.5l1.3-21.3c.4-7.1-1.5-14.2-5.4-20.1L5.5 210.2c-7.3-11-7.3-25.4 0-36.4L17.2 156c3.9-6 5.8-13 5.4-20.1l-1.3-21.3c-.8-13.2 6.4-25.6 18.2-31.5l19.1-9.6C65 70.2 70.2 65 73.4 58.6L83 39.5c5.9-11.8 18.3-19 31.5-18.2l21.3 1.3c7.1 .4 14.2-1.5 20.1-5.4L173.8 5.5zM272 192a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM1.3 441.8L44.4 339.3c.2 .1 .3 .2 .4 .4l9.6 19.1c11.7 23.2 36 37.3 62 35.8l21.3-1.3c.2 0 .5 0 .7 .2l17.8 11.8c5.1 3.3 10.5 5.9 16.1 7.7l-37.6 89.3c-2.3 5.5-7.4 9.2-13.3 9.7s-11.6-2.2-14.8-7.2L74.4 455.5l-56.1 8.3c-5.7 .8-11.4-1.5-15-6s-4.3-10.7-2.1-16zm248 60.4L211.7 413c5.6-1.8 11-4.3 16.1-7.7l17.8-11.8c.2-.1 .4-.2 .7-.2l21.3 1.3c26 1.5 50.3-12.6 62-35.8l9.6-19.1c.1-.2 .2-.3 .4-.4l43.2 102.5c2.2 5.3 1.4 11.4-2.1 16s-9.3 6.9-15 6l-56.1-8.3-32.2 49.2c-3.2 5-8.9 7.7-14.8 7.2s-11-4.3-13.3-9.7z" />
              </svg>{" "}
            </div>
            <p className="text-center text-sm font-bold lg:text-[20.6px]">
              Garantia de 30 DIAS
            </p>
          </div>
        </div>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="bg-black fixed inset-0 bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-start justify-center bg-blue bg-opacity-70 p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="bg-white mt-4 w-full max-w-md transform overflow-hidden rounded-2xl bg-green p-6 text-left align-middle shadow-xl transition-all">
                  <span
                    className="absolute right-5 top-3 cursor-pointer font-extrabold text-blue"
                    onClick={closeModal}
                  >
                    ✖
                  </span>
                  <Dialog.Title
                    as="h3"
                    className="text-2xl leading-6 text-blue"
                  >
                    Preencha esse formulário e entre para o LactoFlow
                  </Dialog.Title>
                  <div className="mt-2">
                    <form
                      onSubmit={(e) => handleSubmit(e)}
                      className="flex flex-col text-blue"
                    >
                      <label htmlFor="celular">Nome</label>
                      <input
                        className="pl-2 dark:bg-[#FEFEFE]"
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Nome"
                      />
                      <label htmlFor="celular">Email</label>
                      <input
                        className="pl-2 dark:bg-[#FEFEFE]"
                        type="text"
                        name="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="maeincrivel@email.com"
                      />
                      <label htmlFor="celular">Celular</label>
                      <PhoneInput
                        className="bg-[#FEFEFE]"
                        required
                        labels={ptBR}
                        flags={flags}
                        value={value}
                        defaultCountry="BR"
                        onChange={setValue}
                      />
                      {/* <a
                          target="_blank"
                          href={`https://pay.hotmart.com/O84147403X?email=${email}&phoneac=${
                            formatPhoneNumber(value ?? "") || ""
                          }&name=${name}&${utmParams.toString()}`}
                          > */}
                      <button
                        type="submit"
                        className="mx-auto mt-4 rounded-lg border-b-4 border-b-[#236C0F] bg-[#207928] px-2 py-3 text-[13.6px] font-extrabold uppercase text-[#FEFEFE] hover:scale-[104%] hover:border-b-[#44972d] hover:bg-[#236C0F] lg:py-5 lg:text-[22.6px]"
                      >
                        Quero aumentar minha produção de leite
                      </button>
                    </form>
                    {/* </a> */}
                    <h3 className="text-center text-base text-blue">
                      SEUS DADOS ESTÃO SEGUROS
                    </h3>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
