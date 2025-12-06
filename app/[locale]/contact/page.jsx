"use client";

import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Textarea } from "../../../components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useTranslations } from 'next-intl';
import { motion } from "framer-motion";

const Contact = () => {
  const t = useTranslations('contact');
  
  const info = [
    {
      icon: <FaPhoneAlt />,
      title: t('info.phone'),
      description: "(+236) 72 05 11 17",
    },
    {
      icon: <FaEnvelope />,
      title: t('info.email'),
      description: "lgdemetrius@gmail",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: t('info.address'),
      description: "Résidence de la France, Quartier Ouango",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/**form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-18 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-emerald-500">
                {t('title')}
              </h3>
              <p className="text-white/60 ">
                {t('description')}
              </p>
              {/**input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder={t('form.firstname')} />
                <Input type="lastname" placeholder={t('form.lastname')} />
                <Input type="email" placeholder={t('form.email')} />
                <Input type="phone" placeholder={t('form.phone')} />
              </div>
              {/**Select */}
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder={t('form.selectService')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>{t('form.selectServiceLabel')}</SelectLabel>
                    <SelectItem value="est">{t('form.webDevelopment')}</SelectItem>
                    <SelectItem value="cst">{t('form.uiUxDesign')}</SelectItem>
                    <SelectItem value="mst">{t('form.logoDesign')}</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/**textarea */}
              <Textarea
                className="h-[200px]"
                placeholder={t('form.message')}
              />
              {/**btn */}
              <Button size="md" className="max-w-40">
                {t('form.sendMessage')}
              </Button>
            </form>
          </div>
          {/**info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-emerald-500 rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
export default Contact;

