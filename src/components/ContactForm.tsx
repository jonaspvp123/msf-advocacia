import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, CheckCircle, AlertCircle, Calendar, Send, ShieldAlert, Sparkles, PhoneCall } from 'lucide-react';
import { PRACTICE_AREAS } from '../data';

export interface ContactFormProps {
  initialArea?: string;
}

export default function ContactForm({ initialArea = '' }: ContactFormProps) {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    whatsapp: '',
    area: initialArea,
    mensagem: '',
    urgencia: 'Normal',
  });

  useEffect(() => {
    if (initialArea) {
      setFormData((prev) => ({ ...prev, area: initialArea }));
    }
  }, [initialArea]);

  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Handle input values
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // Field validations
    if (!formData.nome || !formData.email || !formData.whatsapp) {
      setErrorMsg('Por favor, preencha os campos obrigatórios (Nome, E-mail e WhatsApp).');
      return;
    }

    setIsLoading(true);

    // Simulate high-standard database routing
    setTimeout(() => {
      setIsLoading(false);
      setSuccess(true);
    }, 1800);
  };

  // Pre-filled WhatsApp link generator tailored to legal triage
  const getWhatsAppLink = () => {
    const baseUrl = 'https://api.whatsapp.com/send';
    const number = '5598991234567'; // Institutional number placeholder
    const textBase = `Olá MSF | Araújo Advogados. Meu nome é ${formData.nome || 'visitante'}. Gostaria de agendar uma consulta sobre ${formData.area || 'Triage Jurídica Geral'}. Urgência: ${formData.urgencia}. Mensagem: ${formData.mensagem || 'Gostaria de mais informações.'}`;
    const encodedText = encodeURIComponent(textBase);
    return `${baseUrl}?phone=${number}&text=${encodedText}`;
  };

  return (
    <section id="contato" className="relative py-24 md:py-32 bg-charcoal-dark overflow-hidden scroll-mt-20">
      
      {/* Absolute faint branding elements */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gold/[0.015] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* SECTION 9: CTA FINAL HEADINGS */}
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-20">
          <span className="font-mono text-[10px] tracking-[0.3em] text-gold uppercase block mb-3 font-semibold">
            Canal de Atendimento Estrito
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-white font-medium mb-6">
            Precisa de Orientação Jurídica <span className="text-gold italic font-light">Especializada?</span>
          </h2>
          <div className="w-20 h-0.5 bg-gold/50 mx-auto mb-6" />
          <p className="text-silver/90 text-sm md:text-base font-light max-w-2xl mx-auto leading-relaxed">
            Nossa equipe executiva e jurídica está pronta para analisar metodicamente o seu dossiê fático e propor as melhores estratégias judiciais ou preventivas aplicáveis ao seu negócio ou patrimônio.
          </p>
        </div>

        {/* Double Column Triage Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mt-12">
          
          {/* Left info column: Core communication details */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              
              <div className="p-6 border border-white/[0.04] bg-charcoal-med/30 rounded-lg">
                <span className="font-mono text-[9px] text-gold tracking-widest uppercase block font-bold mb-2">SEGURANÇA E PROTOCOLO</span>
                <p className="text-xs text-silver/80 leading-relaxed font-sans font-light">
                  Cada requisição de atendimento recebida passa pelo nosso comitê de triagem ética para descartar conflitos de interesse de clientes preexistentes garantindo absoluto sigilo legal.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-serif text-lg text-white font-medium">Contatos Rápidos</h3>
                
                <div className="flex items-start space-x-3 text-silver">
                  <Phone className="w-4 h-4 text-gold mt-1 shrink-0" />
                  <div className="text-xs md:text-sm">
                    <p className="font-medium text-white">Central de Atendimento Nacional</p>
                    <p className="font-mono mt-0.5">(98) 3214-5500</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 text-silver">
                  <Calendar className="w-4 h-4 text-gold mt-1 shrink-0" />
                  <div className="text-xs md:text-sm">
                    <p className="font-medium text-white">Plantão Digital de Emergência</p>
                    <p className="font-mono mt-0.5">(98) 99123-4567 (WhatsApp)</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Direct Instant WhatsApp connection block button */}
            <div className="p-6 border border-gold/20 bg-gold/5 rounded-lg flex flex-col space-y-4 shadow-xl">
              <div className="flex items-center space-x-2 text-gold">
                <Sparkles className="w-5 h-5 animate-pulse" />
                <span className="font-mono text-[9px] tracking-widest uppercase font-bold">Atendimento Instantâneo</span>
              </div>
              <h4 className="font-serif text-base text-white">Falar Diretamente Com o Plantonista no WhatsApp</h4>
              <p className="text-xs text-silver/80 font-sans font-light">
                Para urgências criminais ou contratuais, ative o canal direto. Você será atendido por um advogado sênior de prontidão.
              </p>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-xs tracking-wider uppercase rounded text-center flex items-center justify-center gap-2 transform active:scale-95 transition-all shadow-md"
              >
                <PhoneCall className="w-4 h-4" />
                Chamar no WhatsApp
              </a>
            </div>

          </div>

          {/* Right Form column: Active interactive Triage */}
          <div className="lg:col-span-7">
            <div className="border border-white/[0.05] bg-charcoal-med/20 backdrop-blur-sm p-8 rounded-xl shadow-2xl relative">
              
              <AnimatePresence mode="wait">
                {!success ? (
                  <motion.form
                    key="triage-form"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    
                    <div className="border-b border-white/[0.05] pb-4 mb-4">
                      <h4 className="font-serif text-xl font-medium text-white">Formulário de Triage Estruturado</h4>
                      <p className="font-mono text-[9px] text-silver/60 uppercase tracking-widest mt-0.5">Segurança criptográfica e privacidade</p>
                    </div>

                    {errorMsg && (
                      <div className="p-4 bg-red-950/40 border border-red-500/30 rounded flex items-start gap-2.5 text-xs text-red-200">
                        <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                        <span>{errorMsg}</span>
                      </div>
                    )}

                    {/* Grid Names */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col space-y-1.5">
                        <label className="text-[10.5px] font-semibold text-silver uppercase tracking-wider font-sans">
                          Nome Completo *
                        </label>
                        <input
                          type="text"
                          name="nome"
                          value={formData.nome}
                          onChange={handleChange}
                          className="w-full bg-charcoal-dark/80 border border-white/[0.08] focus:border-gold/50 rounded p-3 text-xs text-white focus:outline-none transition-colors"
                          placeholder="Ex: Dr. Carlos Vasconcelos"
                          required
                        />
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <label className="text-[10.5px] font-semibold text-silver uppercase tracking-wider font-sans">
                          E-mail Corporativo *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full bg-charcoal-dark/80 border border-white/[0.08] focus:border-gold/50 rounded p-3 text-xs text-white focus:outline-none transition-colors"
                          placeholder="Ex: carlos@empresa.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col space-y-1.5">
                        <label className="text-[10.5px] font-semibold text-silver uppercase tracking-wider font-sans">
                          WhatsApp / Telefone *
                        </label>
                        <input
                          type="tel"
                          name="whatsapp"
                          value={formData.whatsapp}
                          onChange={handleChange}
                          className="w-full bg-charcoal-dark/80 border border-white/[0.08] focus:border-gold/50 rounded p-3 text-xs text-white focus:outline-none transition-colors"
                          placeholder="Ex: (98) 99123-4567"
                          required
                        />
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <label className="text-[10.5px] font-semibold text-silver uppercase tracking-wider font-sans">
                          Área Jurídica de Interesse
                        </label>
                        <select
                          name="area"
                          value={formData.area}
                          onChange={handleChange}
                          className="w-full bg-charcoal-dark/80 border border-white/[0.08] focus:border-gold/50 rounded p-3 text-xs text-white focus:outline-none transition-colors"
                        >
                          <option value="">Selecione para Triage</option>
                          {PRACTICE_AREAS.map((a) => (
                            <option key={a.id} value={a.title}>
                              {a.title}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="flex flex-col space-y-1.5">
                      <label className="text-[10.5px] font-semibold text-silver uppercase tracking-wider font-sans">
                        Descrição Sumária do Caso ou Dúvida
                      </label>
                      <textarea
                        name="mensagem"
                        rows={4}
                        value={formData.mensagem}
                        onChange={handleChange}
                        className="w-full bg-charcoal-dark/80 border border-white/[0.08] focus:border-gold/50 rounded p-3 text-xs text-white focus:outline-none transition-colors resize-none"
                        placeholder="Quais são os principais objetivos e futilidades do seu passivo/ativo jurídicos?"
                      />
                    </div>

                    {/* Level of Urgency Selection */}
                    <div className="flex items-center space-x-6">
                      <span className="text-[10.5px] font-semibold text-silver uppercase tracking-wider font-sans">Urgência:</span>
                      <div className="flex items-center space-x-4">
                        {['Normal', 'Alta', 'Urgente'].map((urg) => (
                          <label key={urg} className="inline-flex items-center space-x-1.5 cursor-pointer text-xs text-silver">
                            <input
                              type="radio"
                              name="urgencia"
                              value={urg}
                              checked={formData.urgencia === urg}
                              onChange={handleChange}
                              className="accent-gold"
                            />
                            <span>{urg}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Button submit */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isLoading}
                        className={`w-full py-4 bg-gradient-to-r from-gold via-gold-light to-gold-dark text-charcoal-dark font-bold text-xs tracking-widest uppercase rounded flex items-center justify-center gap-2 transform active:scale-95 transition-all shadow-lg hover:shadow-gold/15 ${
                          isLoading ? 'opacity-80 pointer-events-none' : ''
                        }`}
                      >
                        {isLoading ? (
                          <>
                            <div className="w-4 h-4 border-2 border-charcoal-dark border-t-transparent rounded-full animate-spin" />
                            <span>Contatando Servidores...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-3.5 h-3.5" />
                            <span>Solicitar Atendimento Seguro</span>
                          </>
                        )}
                      </button>
                    </div>

                    <div className="flex items-center space-x-2 text-[9.5px] text-silver/50 justify-center">
                      <ShieldAlert className="w-3.5 h-3.5 text-gold/40" />
                      <span>Conforme a LGPD, seus dados pessoais e de negócios permanecem sob segurança estrita.</span>
                    </div>

                  </motion.form>
                ) : (
                  <motion.div
                    key="triage-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center space-y-6 flex flex-col items-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold flex items-center justify-center text-gold animate-[bounce_1s]">
                      <CheckCircle className="w-8 h-8 font-bold" />
                    </div>
                    
                    <div className="space-y-2 max-w-md">
                      <h4 className="font-serif text-2xl text-white font-medium">Requisição Protocolada</h4>
                      <p className="font-sans text-xs text-gold uppercase tracking-[0.1em]">Protocolo MSFA-{Math.floor(Math.random() * 89999 + 10000)}</p>
                      <p className="text-silver/80 text-sm font-light leading-relaxed pt-2">
                        Prezado(a) <strong>{formData.nome}</strong>, seus dados foram encaminhados diretamente ao nosso especialista responsável pela área de <strong>{formData.area || 'Triage Geral'}</strong>.
                      </p>
                    </div>

                    <div className="w-full max-w-sm p-4 bg-charcoal-med/60 border border-white/[0.05] rounded text-left text-xs text-silver/90 space-y-1 font-sans">
                      <p>● Retorno oficial via e-mail: <strong>Dentro de 3 horas úteis</strong></p>
                      <p>● Telefone para urgência: <strong>(98) 99123-4567</strong></p>
                    </div>

                    {/* Back button option */}
                    <div className="flex gap-4 pt-4 w-full justify-center">
                      <button
                        onClick={() => setSuccess(false)}
                        className="px-6 py-2.5 border border-white/10 text-xs text-white hover:border-gold hover:text-gold rounded transition-all uppercase tracking-wider"
                      >
                        Nova Solicitação
                      </button>
                      <a
                        href={getWhatsAppLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2.5 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-xs tracking-wider uppercase rounded text-center transition-all shadow-md"
                      >
                        Falar no Whatsapp Agora
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
