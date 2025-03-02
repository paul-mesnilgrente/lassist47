import Captcha from "@/components/Captcha";
import ContentContainer from "@/components/ContentContainer";
import Image from "next/image";

export default function Contact() {
  return (
    <ContentContainer>
      <form
        className="flex flex-col gap-11"
        action="https://formspree.io/f/xgvognzn"
        method="POST"
      >
        <div className="flex items-end justify-between">
          <div className="flex flex-grow mr-6 flex-col gap-11">
            <label htmlFor="name" className="block pb-1 sr-only">
              Nom/Prénom
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Nom / Prénom"
              className="w-1/2 bg-violine px-4 py-1 text-2xl text-gold placeholder:text-gold"
            />

            <label htmlFor="phone_number" className="block pb-1 sr-only">
              Numéro de téléphone
            </label>
            <input
              type="tel"
              id="phone_number"
              name="phone_number"
              placeholder="N° de téléphone"
              className="w-1/3 bg-violine px-4 py-1 text-2xl text-gold placeholder:text-gold"
            />

            <label htmlFor="email" className="block pb-1 sr-only">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Adresse Mail"
              className="w-4/5 bg-violine px-4 py-1 text-2xl text-gold placeholder:text-gold"
            />
          </div>
          <Image
            src="/lassist47/images/logos/logo_contact.png"
            className="mb-11"
            width={200}
            height={200}
            alt=""
          />
        </div>
        <label htmlFor="message" className="block pb-1 sr-only">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Message"
          rows={5}
          className="w-full bg-violine px-4 py-1 text-2xl text-gold placeholder:text-gold"
        ></textarea>

        <div className="flex justify-between items-center">
          <Captcha />

          <button
            type="submit"
            className="bg-violine text-gold px-6 py-2 text-2xl uppercase"
          >
            Envoyer
          </button>
        </div>
      </form>
    </ContentContainer>
  );
}
