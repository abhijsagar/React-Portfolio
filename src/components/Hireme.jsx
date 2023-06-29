import { content } from '../constants/Content';
import { useState } from 'react';
import Modal from 'react-modal';
import SendEmail from './SendEmail';
import { customStyles } from '../services/Services';

Modal.setAppElement('#root');

const Hireme = () => {
    const { hireme } = content;
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <section className='bg-bg_light_primary'>
            <div className='md:container px-5 pt-14'>
                <h2 className='title' data-aos='fade-down'>
                    {hireme.title}
                </h2>
                <h4 className='subtitle' data-aos='fade-down'>
                    {hireme.subtitle}
                </h4>
                <br />
                <div className='flex items-center md:flex-row flex-col-reverse '>
                    <img src={hireme.image1} alt='...' data-aos='fade-right' className='max-w-sm md:block hidden' />
                    <img src={hireme.image2} data-aos='fade-up' alt='...' className='max-w-sm md:hidden' />
                    <div data-aos='fade-left' className='border-2 border-dark_primary max-w-sm p-6 shadow-sm rounded-xl rounded-br-[8rem] sm:min-w-[22rem]'>
                        <p className='leading-7'>{hireme.para}</p>
                        <br />
                        <button
                            className='btn bg-dark_primary text-white'
                            onClick={() => {
                                openModal();
                            }}>
                            {hireme.btnText}
                        </button>
                    </div>
                </div>
            </div>
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles}>
                <SendEmail />
            </Modal>
        </section>
    );
};

export default Hireme;
