import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BLOG_POSTS } from '../data';
import { BlogPost } from '../types';
import { Calendar, Clock, BookOpen, ArrowUpRight, Search, Share2, Clipboard, Globe2, ChevronRight } from 'lucide-react';

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [readingPost, setReadingPost] = useState<BlogPost | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  const categories = ['Todos', 'Empresarial', 'Trabalhista', 'Previdenciário', 'Família', 'Consumidor', 'Criminal'];

  // Filtering filter logic
  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory = selectedCategory === 'Todos' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleShare = (postTitle: string) => {
    setCopiedLink(true);
    // Simulate copying
    navigator.clipboard.writeText(`${window.location.origin}/blog#${postTitle.toLowerCase().replace(/\s+/g, '-')}`);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <section id="blog" className="relative py-24 md:py-32 bg-charcoal-med/30">
      
      {/* Absolute decorative ambient light */}
      <div className="absolute top-1/3 left-10 w-[400px] h-[400px] bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <span className="font-mono text-[10px] tracking-[0.3em] text-gold uppercase block mb-3 font-semibold">
              Informativo & SEO
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-white font-medium">
              Blog Consultivo de <br />
              <span className="text-gold italic font-light">Inteligência Jurídica</span>
            </h2>
            <div className="w-20 h-0.5 bg-gold/50 mt-4" />
          </div>

          <div className="max-w-md w-full">
            <p className="text-silver/80 text-sm font-light leading-relaxed mb-4">
              Acompanhe entendimentos refinados, alterações legislativas e consultorias preventivas elaboradas por nossos advogados especialistas.
            </p>
            
            {/* Search Input bar */}
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 transform -translate-y-1/2 w-4 h-4 text-silver/60" />
              <input
                type="text"
                placeholder="Pesquisar artigos por tese ou autor..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-charcoal-dark border border-white/[0.08] focus:border-gold/50 rounded pl-10 pr-4 py-2.5 text-xs text-white placeholder-silver/40 focus:outline-none transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Categories filtration tab cluster */}
        <div className="flex flex-wrap items-center gap-2 border-b border-white/[0.06] pb-6 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs tracking-wider uppercase font-semibold rounded-full transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-gold to-gold-dark text-charcoal-dark shadow-md'
                  : 'text-silver hover:text-white bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.05]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Post List Editorial grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post, idx) => {
              return (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.6, delay: idx * 0.08 }}
                  onClick={() => setReadingPost(post)}
                  className="group cursor-pointer flex flex-col h-full bg-charcoal-dark/45 border border-white/[0.04] rounded-lg overflow-hidden transition-all duration-500 hover:border-gold/20 hover:bg-charcoal-dark/90 hover:shadow-xl hover:-translate-y-1.5"
                >
                  
                  {/* Article Banner image */}
                  <div className="h-48 md:h-52 w-full overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark via-transparent to-transparent z-10" />
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Category Label stamp overlying the image card */}
                    <div className="absolute top-4 left-4 z-20">
                      <span className="font-mono text-[9px] tracking-widest text-charcoal-dark bg-gold px-2.5 py-1 rounded font-bold uppercase">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Card Content block */}
                  <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
                    <div className="space-y-3">
                      {/* Meta reading data */}
                      <div className="flex items-center space-x-4 font-mono text-[10px] text-silver/60">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-gold/80" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-gold/80" />
                          {post.readTime}
                        </span>
                      </div>

                      {/* Title heading */}
                      <h3 className="font-serif text-lg md:text-xl font-medium text-white group-hover:text-gold transition-colors duration-300 leading-snug">
                        {post.title}
                      </h3>
                      
                      {/* Short excerpt description */}
                      <p className="text-silver/70 text-xs md:text-sm font-light leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/[0.04] flex items-center justify-between">
                      {/* Author */}
                      <span className="text-[11px] font-medium text-silver font-sans">
                        Por {post.author}
                      </span>

                      {/* Link Action node */}
                      <span className="inline-flex items-center space-x-1 font-mono text-[10px] text-gold uppercase tracking-wider font-bold">
                        <span>Ler Artigo</span>
                        <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </span>
                    </div>

                  </div>

                </motion.article>
              );
            })
          ) : (
            <div className="col-span-full border border-white/[0.05] p-12 text-center text-silver/60 bg-charcoal-dark/20 rounded">
              <BookOpen className="w-12 h-12 text-gold/40 mx-auto mb-4" />
              <p className="font-serif text-lg">Nenhum artigo localizado para a sua pesquisa.</p>
              <button 
                onClick={() => { setSelectedCategory('Todos'); setSearchQuery(''); }}
                className="text-gold text-xs underline mt-2 uppercase tracking-widest font-mono"
              >
                Limpar filtros e buscar de novo
              </button>
            </div>
          )}
        </div>

      </div>

      {/* Slide-over Reader Modal and Share simulations */}
      <AnimatePresence>
        {readingPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto">
            {/* Backdrop blend overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setReadingPost(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Inner reader panel */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', damping: 28 }}
              className="relative w-full max-w-3xl bg-charcoal-dark border border-gold/30 rounded-xl overflow-hidden shadow-2xl z-10 my-8"
            >
              
              {/* Cover Header Banner */}
              <div className="h-64 md:h-80 w-full relative">
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark via-charcoal-dark/50 to-transparent z-10" />
                <img
                  src={readingPost.image}
                  alt={readingPost.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <button
                  onClick={() => setReadingPost(null)}
                  className="absolute top-4 right-4 z-20 px-3 py-1.5 bg-black/60 hover:bg-black text-xs text-white rounded transition-colors"
                >
                  Fechar (Esc)
                </button>
                <div className="absolute bottom-6 left-6 md:left-8 z-10 max-w-xl">
                  <span className="font-mono text-[9px] tracking-widest text-charcoal-dark bg-gold px-2 py-0.5 rounded font-bold uppercase inline-block mb-3">
                    {readingPost.category}
                  </span>
                  <h3 className="font-serif text-2xl md:text-3xl text-white font-medium leading-snug">
                    {readingPost.title}
                  </h3>
                </div>
              </div>

              {/* Reader Body column */}
              <div className="p-6 md:p-10 space-y-6 max-h-[50vh] overflow-y-auto">
                {/* Meta details bar */}
                <div className="flex flex-wrap items-center justify-between text-xs font-mono text-silver/60 pb-4 border-b border-white/[0.06] gap-2">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-gold" />
                      {readingPost.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-gold" />
                      Leitura: {readingPost.readTime}
                    </span>
                  </div>
                  <div>
                    <span>Autor: <strong className="text-white font-serif">{readingPost.author}</strong></span>
                  </div>
                </div>

                {/* Main Content markdown area */}
                <div className="font-sans text-silver-light text-sm md:text-base leading-relaxed space-y-6 font-light">
                  <p className="font-normal text-white italic">
                    {readingPost.excerpt}
                  </p>
                  <div className="h-px bg-white/5 my-4" />
                  <p>
                    {readingPost.content}
                  </p>
                  <p>
                    Nossa equipe na <strong>MSF | Araújo Advogados Associados</strong> permanece constantemente atualizando teses de litígio preventivo para se adiantar a novas jurisprudências civis, previdenciárias e empresariais. Se a sua empresa possui vulnerabilidades ou necessita de governança, o primeiro passo é efetuar uma análise diagnóstica com um profissional qualificado.
                  </p>
                </div>

                {/* Actions Bottom area */}
                <div className="pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    onClick={() => handleShare(readingPost.title)}
                    className="flex items-center space-x-2 text-xs font-mono text-silver hover:text-gold transition-colors py-2 px-3 border border-white/[0.05] hover:border-gold/30 rounded"
                  >
                    <Share2 className="w-4 h-4 text-gold" />
                    <span>{copiedLink ? 'Link Copiado!' : 'Copiar Link Estrito'}</span>
                  </button>

                  <div className="flex items-center space-x-2 text-[10.5px] font-sans text-silver/50">
                    <Globe2 className="w-4 h-4 text-gold/40" />
                    <span>Artigo otimizado para diretrizes legais de SEO e indexação pelo Google Search Console.</span>
                  </div>
                </div>

              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
