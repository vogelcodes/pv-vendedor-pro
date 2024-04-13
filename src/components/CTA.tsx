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
      <div className="flex w-full flex-col items-center rounded-sm bg-cream text-blue">
        <div className="mt-5 w-full text-center">
          {/* <a href="https://instagram.com/carolina.procaci"> */}
          {/* <a href="https://pay.hotmart.com/O84147403X"> */}

          <button
            onClick={() => openModal(ctaOption)}
            data-umami-event={`cta-${ctaOption}-click`}
            className="text-white my-2 max-w-[250px] rounded-lg border-b-4 border-b-[#236C0F] bg-[#207928] px-4 py-3 text-[13.6px] font-extrabold uppercase text-[#FEFEFE] hover:scale-[104%] hover:border-b-[#44972d] hover:bg-[#236C0F] lg:max-w-md lg:py-5 lg:text-[22.6px]"
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
              className="mx-auto h-10 px-4"
              alt="Meios de Pagamento"
              src="/cta/pagamentos2.svg"
              width={529}
              height={30}
            />
          </div>
        </div>
        <div className="m-4 grid w-full max-w-sm grid-cols-3 px-4 lg:max-w-3xl">
          <div className="flex flex-col items-center">
            <img
              alt="acesso-imediato"
              height={58.6}
              width={58.6}
              src="/cta/calendario2.svg"
            />
            <p className="text-center text-[9.79px] font-bold lg:text-[20.6px]">
              2 anos de acesso
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img alt="zoom" width={58.6} src="/cta/zoom.svg" height={58.6} />
            <p className="text-center text-[9.79px] font-bold lg:text-[20.6px]">
              Suporte quinzenal no ZOOM
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              alt="garantia"
              width={44}
              src="/cta/garantia2.svg"
              height={58.6}
            />
            <p className="text-center text-[9.79px] font-bold lg:text-[20.6px]">
              Garantia de 21 DIAS
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
