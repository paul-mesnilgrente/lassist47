export default function Contact() {
  return (
    <>
      <h1 className="text-4xl mb-11">Contactez-moi</h1>

      <form className="flex flex-col gap-11">
        <label htmlFor="name" className="block pb-1 sr-only">
          Nom/Prénom
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Nom / Prénom"
          className="w-full bg-violine px-4 py-1 text-2xl text-gold placeholder:text-gold"
        />

        <label htmlFor="phone_number" className="block pb-1 sr-only">
          Numéro de téléphone
        </label>
        <input
          type="name"
          id="phone_number"
          name="phone_number"
          placeholder="N° de téléphone"
          className="w-full bg-violine px-4 py-1 text-2xl text-gold placeholder:text-gold"
        />

        <label htmlFor="email" className="block pb-1 sr-only">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Adresse Mail"
          className="w-full bg-violine px-4 py-1 text-2xl text-gold placeholder:text-gold"
        />

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

        <div className="flex justify-between">
          <button
            type="reset"
            className="bg-white text-nblack px-6 py-2 text-2xl uppercase"
          >
            Captcha
          </button>
          <button
            type="submit"
            className="bg-violine text-gold px-6 py-2 text-2xl uppercase"
          >
            Envoyer
          </button>
        </div>
      </form>
    </>
  );
}
