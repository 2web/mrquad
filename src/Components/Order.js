import React from 'react';
import styled from 'styled-components';
import { ButtonModal } from './ButtonModal';
import { OrderListItem } from './OrderListItem';

const OrderStyled = styled.section`
    position: fixed;
    display: flex;
    flex-direction: column;
    left: 0;
    top: 80px;
    background: #fff;
    min-width: 380px;
    height: calc(100% - 80px);
    box-shadow: 3px 4px 5px rgba(0, 0, 0, .25);
    color: #000;
    padding: 20px;
`;

const OrderTitle = styled.h2`
    text-align: center;
    margin-bottom: 30px;
`;

const OrderContent = styled.div`
    flex-grow: 1;
`;

const OrderList = styled.ul``; 

const Total = styled.div`
    display: flex;
    margin-bottom: 30px;
    & span:first-child{
        flex-grow: 1;
    }
`;

export const Order = () => {
    return (
        <OrderStyled>
            <OrderTitle>ВАШ ЗАКАЗ</OrderTitle>
            <OrderContent>
                <OrderList>
                    <OrderListItem/>
                    <OrderListItem/>
                    <OrderListItem/>
                </OrderList>
            </OrderContent>
            <Total>
                <span>Итого:</span>
                <span>5</span>
                <span>850 Р</span>
            </Total>
            <ButtonModal>Оформить</ButtonModal>
        </OrderStyled>
    )
}