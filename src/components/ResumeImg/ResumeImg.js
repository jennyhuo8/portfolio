import { useState } from 'react'
import { Section } from '../../styles/GlobalComponents';
import { ResumeView, PageContainer, BigPageContainer, ModalOverlay, ModalContent, ResumeLink } from './ResumeImgStyles';


export default function Resume()  {
  const ImageModal = ({ resume, onClose }) => (
      <ModalOverlay onClick={onClose}>
        <ModalContent>
          <BigPageContainer src='/images/resumepic.png' />
        </ModalContent>
      </ModalOverlay>
  );

  const [showModal, setShowModal] = useState(false);

  const handleImageClick = () => {
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setShowModal(false);
    document.body.style.overflow = 'scroll';
  };

  return (
    <Section id="resume" >
      <ResumeView>
        <ResumeLink href="/resume.pdf" target="_blank" rel="noopener noreferrer">Or get the PDF here!</ResumeLink>
        <PageContainer src='/images/resumepic.png'
        onClick={handleImageClick}/>
        {showModal && <ImageModal resume='/images/resumepic.png' onClose={handleCloseModal} />}
      </ResumeView>
    </Section>
  );
}