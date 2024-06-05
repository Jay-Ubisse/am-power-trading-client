import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const ContactPage = () => {
  return (
    <>
      <div className="min-h-screen">
        <section className="mx-4 lg:mx-0 py-10 flex flex-col gap-12 lg:gap-0 lg:flex-row justify-center">
          <div className="lg:w-2/5 text-slate-800">
            <h1 className="font-bold text-3xl">Contacte-nos</h1>
            <h2 className="text-primary font-bold text-xl my-5 lg:my-10">
              AM Power Trading
            </h2>
            <p className="font-medium text-base my-5 lg:my-10 flex gap-2">
              <span>
                <LocationOnIcon />
              </span>
              <span>Rua da Costa do Sol, número 75 – R/C, Maputo</span>
            </p>
            <p className="font-medium text-base my-5 lg:my-10 flex gap-2">
              <span>
                <EmailIcon />
              </span>
              <span>loja@ampowertrading.co.mz</span>
            </p>
            <div className="font-medium text-base my-5 lg:my-10 flex gap-2">
              <div>
                <LocalPhoneIcon />
              </div>
              <div>
                <p>(+258) 21 000000</p>
                <p>(+258) 82 000 0000</p>
              </div>
            </div>
            <div className="flex gap-3">
              <LinkedInIcon style={{ fontSize: 40 }} />
            </div>
          </div>
          <form className="lg:w-2/5 flex flex-col gap-2">
            <input
              type="text"
              required
              placeholder="Nome"
              className="border-b border-slate-800  hover:border-primary focus:border-primary bg-transparent py-4 px-2 w-full focus:outline-none placeholder:text-slate-700 text-slate-800"
            />
            <input
              type="text"
              required
              placeholder="Endereço"
              className="border-b border-slate-800 hover:border-primary focus:border-primary bg-transparent py-4 px-2 w-full focus:outline-none placeholder:text-slate-700 text-slate-800"
            />
            <div className="flex justify-between gap-2">
              <input
                type="email"
                required
                placeholder="Email"
                className="border-b border-slate-800 hover:border-primary focus:border-primary bg-transparent py-4 px-2 w-full focus:outline-none placeholder:text-slate-700 text-slate-800"
              />
              <input
                type="text"
                required
                placeholder="Celular"
                className="border-b border-slate-800 hover:border-primary focus:border-primary bg-transparent py-4 px-2 w-full focus:outline-none placeholder:text-slate-700 text-slate-800"
              />
            </div>
            <input
              type="text"
              required
              placeholder="Assunto"
              className="border-b border-slate-800 hover:border-primary focus:border-primary bg-transparent py-4 px-2 w-full focus:outline-none placeholder:text-slate-700 text-slate-800"
            />
            <textarea
              cols={30}
              rows={5}
              placeholder="Digite a sua mensagem aqui..."
              className="border-b border-slate-800 hover:border-primary focus:border-primary bg-transparent py-4 px-2 w-full focus:outline-none placeholder:text-slate-700 text-slate-800"
            ></textarea>
            <button
              type="submit"
              className="bg-primary text-white hover:bg-primary border border-primary py-4 px-2 w-full focus:outline-none"
            >
              Enviar
            </button>
          </form>
        </section>
        <div className="w-screen max-w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3511.2816514801093!2d32.57694255810194!3d-25.977270879383823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ee69b0a351f582d%3A0xce493a9de1908f75!2sCircuito%20de%20Manuten%C3%A7%C3%A3o%20Ant%C3%B3nio%20Repinga!5e0!3m2!1sen!2smz!4v1689081362255!5m2!1sen!2smz"
            width="100%"
            height="400"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </>
  );
};

export default ContactPage;
