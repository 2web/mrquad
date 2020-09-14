import React from 'react';
import styled from 'styled-components';
import { ButtonModal } from './ButtonModal';

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 20;
`;

const Modal = styled.div`
    background-color: #fff;
    width: 600px;
    height: 600px;
    position: relative;
    color: #000;
`;

const Banner = styled.div`
    /*position: absolute;*/
    left: 0;
    top: 0;
    width: 100%;
    height: 200px;
    background-image: url(${({img}) => img});
    background-size: cover;
    background-position: center;
    margin-bottom: 20px;
`;

const Title = styled.div`
    padding: 20px 53px 20px 37px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: Pacifico;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 53px;
`;

const BannerName = styled.div`
    
`;

const BannerPrice = styled.div`
    
`;

const ButtonArea = styled.div`
    display: flex;
    flex-direction: row;
`;

export const ModalItem = ({ openItem, setOpenItem }) => {

    function closeModal(e){
        if(e.target.id === 'overlay'){
            setOpenItem(null);
        }
    }

    if(!openItem) return null;
    return (
        <Overlay id="overlay" onClick={closeModal}>
            <Modal>
                <Banner img={openItem.img}/>
                <Title>
                    <BannerName>
                        {openItem.name}
                    </BannerName>
                    <BannerPrice>
                            {openItem.price.toLocaleString('ru-RU',
                            {style: 'currency', currency: 'RUB'})}
                    </BannerPrice>
                </Title>
                <ButtonArea>
                    <ButtonModal>Добавить</ButtonModal>
                </ButtonArea>
            </Modal>
        </Overlay>
    )
};
