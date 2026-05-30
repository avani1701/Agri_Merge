import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [selectedProduct, setSelectedProduct] = useState('');
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const productParam = params.get('product');
    if (productParam) {
      setSelectedProduct(productParam);
    }
  }, [location]);

  return (
    <section id="contact" className="relative py-24 bg-slate-900 text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="/contact_hero_bg.png" 
          alt="Global Communication Network" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/90 to-slate-900"></div>
      </div>

      {/* Abstract Background Patterns */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
        {/* Subtle grid texture */}
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="relative container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <span className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-4 block">Get In Touch</span>
            <h2 className="text-4xl font-bold mb-8 leading-tight">Scaling Your Global Business with Reliability, Transparency, and Trust</h2>  
            
            <div className="space-y-8 mt-12">
              <motion.div 
                whileHover={{ x: 10 }}
                className="flex items-start transition-colors"
              >
                <div className="bg-slate-800 p-3 rounded-lg mr-4">
                  <Mail className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email Us</p>
                  <p className="text-xl font-medium">info@agrimerge.in</p>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ x: 10 }}
                className="flex items-start transition-colors"
              >
                <div className="bg-slate-800 p-3 rounded-lg mr-4">
                  <Phone className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Call Us</p>
                  <p className="text-xl font-medium">+91 70005 68721</p>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ x: 10 }}
                className="flex items-start transition-colors"
              >
                <div className="bg-slate-800 p-3 rounded-lg mr-4">
                  <MapPin className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Our Location</p>
                  <p className="text-xl font-medium">Indore, India</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <form className="relative overflow-hidden p-10 rounded-3xl shadow-2xl space-y-6 border border-slate-700/50 bg-slate-900 text-white">
              <div className="text-center mb-6 relative z-10">
                <div className="flex justify-center mb-4">
                  <img src="/logo_main.png" alt="Agri Merge" className="h-20 w-auto object-contain" />
                </div>
                <h3 className="text-2xl font-bold text-white">Inquiry Form</h3>
                <p className="text-slate-400 text-sm mt-2">Connecting Indian Harvests to Global Demand</p>
              </div>

              {/* Background Image inside the Form Card */}
              <div className="absolute inset-0 z-0 pointer-events-none opacity-10">
                <img 
                  src="/world_map_network.png" 
                  alt="Background Map" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-slate-950/60"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                <div>
                  <label className="block text-slate-300 text-sm font-bold mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-slate-800/80 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 text-sm font-bold mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    placeholder="Email"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 text-sm font-bold mb-2">Destination Country</label>
                  <select 
                    defaultValue=""
                    className="w-full bg-slate-800/80 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-light transition-all cursor-pointer"
                  >
                    <option value="" disabled className="bg-slate-800 text-white">Select Country</option>
                    <option value="Afghanistan" className="bg-slate-800 text-white">Afghanistan</option>
                    <option value="Albania" className="bg-slate-800 text-white">Albania</option>
                    <option value="Algeria" className="bg-slate-800 text-white">Algeria</option>
                    <option value="Andorra" className="bg-slate-800 text-white">Andorra</option>
                    <option value="Angola" className="bg-slate-800 text-white">Angola</option>
                    <option value="Antigua and Barbuda" className="bg-slate-800 text-white">Antigua and Barbuda</option>
                    <option value="Argentina" className="bg-slate-800 text-white">Argentina</option>
                    <option value="Armenia" className="bg-slate-800 text-white">Armenia</option>
                    <option value="Australia" className="bg-slate-800 text-white">Australia</option>
                    <option value="Austria" className="bg-slate-800 text-white">Austria</option>
                    <option value="Azerbaijan" className="bg-slate-800 text-white">Azerbaijan</option>
                    <option value="Bahamas" className="bg-slate-800 text-white">Bahamas</option>
                    <option value="Bahrain" className="bg-slate-800 text-white">Bahrain</option>
                    <option value="Bangladesh" className="bg-slate-800 text-white">Bangladesh</option>
                    <option value="Barbados" className="bg-slate-800 text-white">Barbados</option>
                    <option value="Belarus" className="bg-slate-800 text-white">Belarus</option>
                    <option value="Belgium" className="bg-slate-800 text-white">Belgium</option>
                    <option value="Belize" className="bg-slate-800 text-white">Belize</option>
                    <option value="Benin" className="bg-slate-800 text-white">Benin</option>
                    <option value="Bhutan" className="bg-slate-800 text-white">Bhutan</option>
                    <option value="Bolivia" className="bg-slate-800 text-white">Bolivia</option>
                    <option value="Bosnia and Herzegovina" className="bg-slate-800 text-white">Bosnia and Herzegovina</option>
                    <option value="Botswana" className="bg-slate-800 text-white">Botswana</option>
                    <option value="Brazil" className="bg-slate-800 text-white">Brazil</option>
                    <option value="Brunei" className="bg-slate-800 text-white">Brunei</option>
                    <option value="Bulgaria" className="bg-slate-800 text-white">Bulgaria</option>
                    <option value="Burkina Faso" className="bg-slate-800 text-white">Burkina Faso</option>
                    <option value="Burundi" className="bg-slate-800 text-white">Burundi</option>
                    <option value="Cabo Verde" className="bg-slate-800 text-white">Cabo Verde</option>
                    <option value="Cambodia" className="bg-slate-800 text-white">Cambodia</option>
                    <option value="Cameroon" className="bg-slate-800 text-white">Cameroon</option>
                    <option value="Canada" className="bg-slate-800 text-white">Canada</option>
                    <option value="Central African Republic" className="bg-slate-800 text-white">Central African Republic</option>
                    <option value="Chad" className="bg-slate-800 text-white">Chad</option>
                    <option value="Chile" className="bg-slate-800 text-white">Chile</option>
                    <option value="China" className="bg-slate-800 text-white">China</option>
                    <option value="Colombia" className="bg-slate-800 text-white">Colombia</option>
                    <option value="Comoros" className="bg-slate-800 text-white">Comoros</option>
                    <option value="Congo" className="bg-slate-800 text-white">Congo</option>
                    <option value="Costa Rica" className="bg-slate-800 text-white">Costa Rica</option>
                    <option value="Croatia" className="bg-slate-800 text-white">Croatia</option>
                    <option value="Cuba" className="bg-slate-800 text-white">Cuba</option>
                    <option value="Cyprus" className="bg-slate-800 text-white">Cyprus</option>
                    <option value="Czechia" className="bg-slate-800 text-white">Czechia</option>
                    <option value="Denmark" className="bg-slate-800 text-white">Denmark</option>
                    <option value="Djibouti" className="bg-slate-800 text-white">Djibouti</option>
                    <option value="Dominica" className="bg-slate-800 text-white">Dominica</option>
                    <option value="Dominican Republic" className="bg-slate-800 text-white">Dominican Republic</option>
                    <option value="Ecuador" className="bg-slate-800 text-white">Ecuador</option>
                    <option value="Egypt" className="bg-slate-800 text-white">Egypt</option>
                    <option value="El Salvador" className="bg-slate-800 text-white">El Salvador</option>
                    <option value="Equatorial Guinea" className="bg-slate-800 text-white">Equatorial Guinea</option>
                    <option value="Eritrea" className="bg-slate-800 text-white">Eritrea</option>
                    <option value="Estonia" className="bg-slate-800 text-white">Estonia</option>
                    <option value="Eswatini" className="bg-slate-800 text-white">Eswatini</option>
                    <option value="Ethiopia" className="bg-slate-800 text-white">Ethiopia</option>
                    <option value="Fiji" className="bg-slate-800 text-white">Fiji</option>
                    <option value="Finland" className="bg-slate-800 text-white">Finland</option>
                    <option value="France" className="bg-slate-800 text-white">France</option>
                    <option value="Gabon" className="bg-slate-800 text-white">Gabon</option>
                    <option value="Gambia" className="bg-slate-800 text-white">Gambia</option>
                    <option value="Georgia" className="bg-slate-800 text-white">Georgia</option>
                    <option value="Germany" className="bg-slate-800 text-white">Germany</option>
                    <option value="Ghana" className="bg-slate-800 text-white">Ghana</option>
                    <option value="Greece" className="bg-slate-800 text-white">Greece</option>
                    <option value="Grenada" className="bg-slate-800 text-white">Grenada</option>
                    <option value="Guatemala" className="bg-slate-800 text-white">Guatemala</option>
                    <option value="Guinea" className="bg-slate-800 text-white">Guinea</option>
                    <option value="Guinea-Bissau" className="bg-slate-800 text-white">Guinea-Bissau</option>
                    <option value="Guyana" className="bg-slate-800 text-white">Guyana</option>
                    <option value="Haiti" className="bg-slate-800 text-white">Haiti</option>
                    <option value="Honduras" className="bg-slate-800 text-white">Honduras</option>
                    <option value="Hungary" className="bg-slate-800 text-white">Hungary</option>
                    <option value="Iceland" className="bg-slate-800 text-white">Iceland</option>
                    <option value="India" className="bg-slate-800 text-white">India</option>
                    <option value="Indonesia" className="bg-slate-800 text-white">Indonesia</option>
                    <option value="Iran" className="bg-slate-800 text-white">Iran</option>
                    <option value="Iraq" className="bg-slate-800 text-white">Iraq</option>
                    <option value="Ireland" className="bg-slate-800 text-white">Ireland</option>
                    <option value="Israel" className="bg-slate-800 text-white">Israel</option>
                    <option value="Italy" className="bg-slate-800 text-white">Italy</option>
                    <option value="Jamaica" className="bg-slate-800 text-white">Jamaica</option>
                    <option value="Japan" className="bg-slate-800 text-white">Japan</option>
                    <option value="Jordan" className="bg-slate-800 text-white">Jordan</option>
                    <option value="Kazakhstan" className="bg-slate-800 text-white">Kazakhstan</option>
                    <option value="Kenya" className="bg-slate-800 text-white">Kenya</option>
                    <option value="Kiribati" className="bg-slate-800 text-white">Kiribati</option>
                    <option value="Korea, North" className="bg-slate-800 text-white">Korea, North</option>
                    <option value="Korea, South" className="bg-slate-800 text-white">Korea, South</option>
                    <option value="Kosovo" className="bg-slate-800 text-white">Kosovo</option>
                    <option value="Kuwait" className="bg-slate-800 text-white">Kuwait</option>
                    <option value="Kyrgyzstan" className="bg-slate-800 text-white">Kyrgyzstan</option>
                    <option value="Laos" className="bg-slate-800 text-white">Laos</option>
                    <option value="Latvia" className="bg-slate-800 text-white">Latvia</option>
                    <option value="Lebanon" className="bg-slate-800 text-white">Lebanon</option>
                    <option value="Lesotho" className="bg-slate-800 text-white">Lesotho</option>
                    <option value="Liberia" className="bg-slate-800 text-white">Liberia</option>
                    <option value="Libya" className="bg-slate-800 text-white">Libya</option>
                    <option value="Liechtenstein" className="bg-slate-800 text-white">Liechtenstein</option>
                    <option value="Lithuania" className="bg-slate-800 text-white">Lithuania</option>
                    <option value="Luxembourg" className="bg-slate-800 text-white">Luxembourg</option>
                    <option value="Madagascar" className="bg-slate-800 text-white">Madagascar</option>
                    <option value="Malawi" className="bg-slate-800 text-white">Malawi</option>
                    <option value="Malaysia" className="bg-slate-800 text-white">Malaysia</option>
                    <option value="Maldives" className="bg-slate-800 text-white">Maldives</option>
                    <option value="Mali" className="bg-slate-800 text-white">Mali</option>
                    <option value="Malta" className="bg-slate-800 text-white">Malta</option>
                    <option value="Marshall Islands" className="bg-slate-800 text-white">Marshall Islands</option>
                    <option value="Mauritania" className="bg-slate-800 text-white">Mauritania</option>
                    <option value="Mauritius" className="bg-slate-800 text-white">Mauritius</option>
                    <option value="Mexico" className="bg-slate-800 text-white">Mexico</option>
                    <option value="Micronesia" className="bg-slate-800 text-white">Micronesia</option>
                    <option value="Moldova" className="bg-slate-800 text-white">Moldova</option>
                    <option value="Monaco" className="bg-slate-800 text-white">Monaco</option>
                    <option value="Mongolia" className="bg-slate-800 text-white">Mongolia</option>
                    <option value="Montenegro" className="bg-slate-800 text-white">Montenegro</option>
                    <option value="Morocco" className="bg-slate-800 text-white">Morocco</option>
                    <option value="Mozambique" className="bg-slate-800 text-white">Mozambique</option>
                    <option value="Myanmar" className="bg-slate-800 text-white">Myanmar</option>
                    <option value="Namibia" className="bg-slate-800 text-white">Namibia</option>
                    <option value="Nauru" className="bg-slate-800 text-white">Nauru</option>
                    <option value="Nepal" className="bg-slate-800 text-white">Nepal</option>
                    <option value="Netherlands" className="bg-slate-800 text-white">Netherlands</option>
                    <option value="New Zealand" className="bg-slate-800 text-white">New Zealand</option>
                    <option value="Nicaragua" className="bg-slate-800 text-white">Nicaragua</option>
                    <option value="Niger" className="bg-slate-800 text-white">Niger</option>
                    <option value="Nigeria" className="bg-slate-800 text-white">Nigeria</option>
                    <option value="North Macedonia" className="bg-slate-800 text-white">North Macedonia</option>
                    <option value="Norway" className="bg-slate-800 text-white">Norway</option>
                    <option value="Oman" className="bg-slate-800 text-white">Oman</option>
                    <option value="Pakistan" className="bg-slate-800 text-white">Pakistan</option>
                    <option value="Palau" className="bg-slate-800 text-white">Palau</option>
                    <option value="Palestine State" className="bg-slate-800 text-white">Palestine State</option>
                    <option value="Panama" className="bg-slate-800 text-white">Panama</option>
                    <option value="Papua New Guinea" className="bg-slate-800 text-white">Papua New Guinea</option>
                    <option value="Paraguay" className="bg-slate-800 text-white">Paraguay</option>
                    <option value="Peru" className="bg-slate-800 text-white">Peru</option>
                    <option value="Philippines" className="bg-slate-800 text-white">Philippines</option>
                    <option value="Poland" className="bg-slate-800 text-white">Poland</option>
                    <option value="Portugal" className="bg-slate-800 text-white">Portugal</option>
                    <option value="Qatar" className="bg-slate-800 text-white">Qatar</option>
                    <option value="Romania" className="bg-slate-800 text-white">Romania</option>
                    <option value="Russia" className="bg-slate-800 text-white">Russia</option>
                    <option value="Rwanda" className="bg-slate-800 text-white">Rwanda</option>
                    <option value="Saint Kitts and Nevis" className="bg-slate-800 text-white">Saint Kitts and Nevis</option>
                    <option value="Saint Lucia" className="bg-slate-800 text-white">Saint Lucia</option>
                    <option value="Saint Vincent and the Grenadines" className="bg-slate-800 text-white">Saint Vincent and the Grenadines</option>
                    <option value="Samoa" className="bg-slate-800 text-white">Samoa</option>
                    <option value="San Marino" className="bg-slate-800 text-white">San Marino</option>
                    <option value="Sao Tome and Principe" className="bg-slate-800 text-white">Sao Tome and Principe</option>
                    <option value="Saudi Arabia" className="bg-slate-800 text-white">Saudi Arabia</option>
                    <option value="Senegal" className="bg-slate-800 text-white">Senegal</option>
                    <option value="Serbia" className="bg-slate-800 text-white">Serbia</option>
                    <option value="Seychelles" className="bg-slate-800 text-white">Seychelles</option>
                    <option value="Sierra Leone" className="bg-slate-800 text-white">Sierra Leone</option>
                    <option value="Singapore" className="bg-slate-800 text-white">Singapore</option>
                    <option value="Slovakia" className="bg-slate-800 text-white">Slovakia</option>
                    <option value="Slovenia" className="bg-slate-800 text-white">Slovenia</option>
                    <option value="Solomon Islands" className="bg-slate-800 text-white">Solomon Islands</option>
                    <option value="Somalia" className="bg-slate-800 text-white">Somalia</option>
                    <option value="South Africa" className="bg-slate-800 text-white">South Africa</option>
                    <option value="South Sudan" className="bg-slate-800 text-white">South Sudan</option>
                    <option value="Spain" className="bg-slate-800 text-white">Spain</option>
                    <option value="Sri Lanka" className="bg-slate-800 text-white">Sri Lanka</option>
                    <option value="Sudan" className="bg-slate-800 text-white">Sudan</option>
                    <option value="Suriname" className="bg-slate-800 text-white">Suriname</option>
                    <option value="Sweden" className="bg-slate-800 text-white">Sweden</option>
                    <option value="Switzerland" className="bg-slate-800 text-white">Switzerland</option>
                    <option value="Syria" className="bg-slate-800 text-white">Syria</option>
                    <option value="Taiwan" className="bg-slate-800 text-white">Taiwan</option>
                    <option value="Tajikistan" className="bg-slate-800 text-white">Tajikistan</option>
                    <option value="Tanzania" className="bg-slate-800 text-white">Tanzania</option>
                    <option value="Thailand" className="bg-slate-800 text-white">Thailand</option>
                    <option value="Timor-Leste" className="bg-slate-800 text-white">Timor-Leste</option>
                    <option value="Togo" className="bg-slate-800 text-white">Togo</option>
                    <option value="Tonga" className="bg-slate-800 text-white">Tonga</option>
                    <option value="Trinidad and Tobago" className="bg-slate-800 text-white">Trinidad and Tobago</option>
                    <option value="Tunisia" className="bg-slate-800 text-white">Tunisia</option>
                    <option value="Turkey" className="bg-slate-800 text-white">Turkey</option>
                    <option value="Turkmenistan" className="bg-slate-800 text-white">Turkmenistan</option>
                    <option value="Tuvalu" className="bg-slate-800 text-white">Tuvalu</option>
                    <option value="Uganda" className="bg-slate-800 text-white">Uganda</option>
                    <option value="Ukraine" className="bg-slate-800 text-white">Ukraine</option>
                    <option value="United Arab Emirates" className="bg-slate-800 text-white">United Arab Emirates</option>
                    <option value="United Kingdom" className="bg-slate-800 text-white">United Kingdom</option>
                    <option value="United States of America" className="bg-slate-800 text-white">United States of America</option>
                    <option value="Uruguay" className="bg-slate-800 text-white">Uruguay</option>
                    <option value="Uzbekistan" className="bg-slate-800 text-white">Uzbekistan</option>
                    <option value="Vanuatu" className="bg-slate-800 text-white">Vanuatu</option>
                    <option value="Venezuela" className="bg-slate-800 text-white">Venezuela</option>
                    <option value="Vietnam" className="bg-slate-800 text-white">Vietnam</option>
                    <option value="Yemen" className="bg-slate-800 text-white">Yemen</option>
                    <option value="Zambia" className="bg-slate-800 text-white">Zambia</option>
                    <option value="Zimbabwe" className="bg-slate-800 text-white">Zimbabwe</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-300 text-sm font-bold mb-2">Product of Interest</label>
                  <select 
                    value={selectedProduct}
                    onChange={(e) => setSelectedProduct(e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all cursor-pointer"
                  >
                    <option value="" disabled className="bg-slate-800 text-white">Select Product</option>
                    <option value="Fresh Garlic" className="bg-slate-800 text-white">Fresh Garlic</option>
                    <option value="Soyabean" className="bg-slate-800 text-white">Soyabean</option>
                    <option value="Pulses" className="bg-slate-800 text-white">Premium Pulses</option>
                    <option value="Other" className="bg-slate-800 text-white">Other Commodities</option>
                  </select>
                </div>
              </div>

              {selectedProduct === 'Other' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-slate-800/60 p-5 rounded-2xl border border-slate-700/50 relative z-10"
                >
                  <label className="block text-slate-300 text-sm font-bold mb-2">Specify Commodity</label>
                  <input 
                    type="text" 
                    className="w-full bg-slate-900/80 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    placeholder="Specify the agricultural commodity you are looking for..."
                  />
                </motion.div>
              )}
              
              <div className="relative z-10">
                <label className="block text-slate-300 text-sm font-bold mb-2">Message</label>
                <textarea 
                  rows="4"
                  className="w-full bg-slate-800/80 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>

              <button className="relative z-10 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl flex items-center justify-center transition-all group shadow-lg shadow-blue-900/40">
                Send Message
                <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
