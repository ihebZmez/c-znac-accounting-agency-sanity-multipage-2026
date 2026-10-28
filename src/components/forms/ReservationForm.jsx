import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Send, Loader2, CheckCircle } from "lucide-react";
import gsap from "gsap";
import Button from "../ui/Button";

// Web3Forms access key (get it at https://web3forms.com)
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

const ReservationForm = () => {
  const { t } = useTranslation();
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const payload = new FormData();
      payload.append("access_key", WEB3FORMS_ACCESS_KEY);
      payload.append("name", formData.name);
      payload.append("phone", formData.phone);
      payload.append("email", formData.email);
      payload.append("service", formData.service);
      payload.append("message", formData.message);
      // Optional — nicer inbox formatting
      payload.append(
        "subject",
        `Nouvelle demande de ${formData.name || "client"}`,
      );
      payload.append("from_name", "Site Web");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: payload,
      });

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.message || "Une erreur est survenue.");
      }

      setIsSubmitted(true);
      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "",
        message: "",
      });

      // Success animation
      gsap.fromTo(
        ".success-check",
        { scale: 0, opacity: 0, rotation: -180 },
        {
          scale: 1,
          opacity: 1,
          rotation: 0,
          duration: 0.5,
          ease: "back.out(0.6)",
        },
      );

      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (err) {
      console.error("Web3Forms error:", err);
      setError(err.message || "Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="relative">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder=" "
            className="w-full bg-white/5 border border-gym-border rounded-xl px-4 py-3.5 text-white placeholder-transparent focus:outline-none focus:border-gym-orange transition-colors duration-300"
          />
          <label className="absolute left-4 top-3.5 text-white/40 text-sm transition-all duration-300 pointer-events-none peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs peer-focus:text-gym-orange">
            {t("contact.form.name")}
          </label>
        </div>

        <div className="relative">
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder=" "
            className="w-full bg-white/5 border border-gym-border rounded-xl px-4 py-3.5 text-white placeholder-transparent focus:outline-none focus:border-gym-orange transition-colors duration-300"
          />
          <label className="absolute left-4 top-3.5 text-white/40 text-sm transition-all duration-300 pointer-events-none peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs peer-focus:text-gym-orange">
            {t("contact.form.phone")}
          </label>
        </div>
      </div>

      <div className="relative">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder=" "
          className="w-full bg-white/5 border border-gym-border rounded-xl px-4 py-3.5 text-white placeholder-transparent focus:outline-none focus:border-gym-orange transition-colors duration-300"
        />
        <label className="absolute left-4 top-3.5 text-white/40 text-sm transition-all duration-300 pointer-events-none peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs peer-focus:text-gym-orange">
          {t("contact.form.email")}
        </label>
      </div>

      <div className="relative">
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full bg-white/5 border border-gym-border rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-gym-orange transition-colors duration-300 appearance-none"
        >
          <option value="" className="text-black">
            {t("contact.form.service")}
          </option>
          <option value="finance" className="text-black">
            Finances & comptabilité
          </option>
          <option value="audit" className="text-black">
            Audit & conformité
          </option>
          <option value="legal" className="text-black">
            Droit & stratégie juridique
          </option>
          <option value="tax" className="text-black">
            Fiscalité & droits de succession
          </option>
          <option value="investment" className="text-black">
            Investissement & croissance
          </option>
          <option value="advisory" className="text-black">
            Conseil de direction
          </option>
        </select>
      </div>

      <div className="relative">
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          placeholder=" "
          className="w-full bg-white/5 border border-gym-border rounded-xl px-4 py-3.5 text-white placeholder-transparent focus:outline-none focus:border-gym-orange transition-colors duration-300 resize-none"
        />
        <label className="absolute left-4 top-3.5 text-white/40 text-sm transition-all duration-300 pointer-events-none peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs peer-focus:text-gym-orange">
          {t("contact.form.message")}
        </label>
      </div>

      {error && <div className="text-red-400 text-sm text-center">{error}</div>}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            {t("contact.form.sending")}
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            {t("contact.form.submit")}
          </>
        )}
      </Button>

      {isSubmitted && (
        <div className="success-check flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/30 rounded-xl text-green-400">
          <CheckCircle className="w-5 h-5 shrink-0" />
          <span className="text-sm">{t("contact.success")}</span>
        </div>
      )}
    </form>
  );
};

export default ReservationForm;
