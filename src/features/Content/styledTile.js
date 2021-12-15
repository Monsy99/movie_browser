import styled from "styled-components";
import { ReactComponent as StarIcon } from "../../images/star.svg";

export const Container = styled.div`
    width: 324px;
    background-color: ${({ theme }) => theme.color.white};
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
    border-radius: 5px;
    padding: 16px;

    margin: 0 12px 24px 12px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        max-width: 288px;
        display: grid;
        grid-template-columns: auto 1fr;
        grid-gap: 16px
    }
`;

export const Image = styled.img`
    max-width: 292px;
    max-height: 434px;
    
    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        max-width: 114px;
        max-height: 168px;
    }
`;

export const Description = styled.div`


    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {

    }
`;

export const Title = styled.header`
    color: ${({ theme }) => theme.color.black};
    font-weight: 500;
    font-size: 22px;
    line-height: 1.3;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 16px;
    }
`;
export const Year = styled.div`
    color: ${({ theme }) => theme.color.waterloo};
    font-size: 16px;
    line-height: 1.5;
    padding-top: 8px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 13px;
        padding-top: 4px;
    }
`;

export const Tags = styled.ul`
    list-style: none;
    padding-left: 0;
    display: flex;
    flex-wrap: wrap;
    margin: -8px -8px -8px -4px;   

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        margin: -4px -4px -4px -2px;  
    }
`;

export const Tag = styled.li`
    background-color: ${({ theme }) => theme.color.mystic};
    padding: 8px 16px;
    font-size: 14px;
    line-height: 1.4;
    margin: 16px 4px 4px 4px;
    border-radius: 5px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 10px;
        line-height: 1.1;
        margin: 8px 2px 2px 2px;
        padding: 4px 8px;
    }
`;

export const Rating = styled.div`
    padding: 0;
    margin-top: 40px;
    display: inline-flex;
    align-items: center;
    flex-wrap: wrap;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        margin-top: 12px;
        padding: 0;
    }
`;

export const Star = styled(StarIcon)`
    color: ${({ theme }) => theme.color.candlelight};
    align-content: center;
    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        max-width: 16px;
        max-height: 16px;
    }
`;

export const Rate = styled.div`
    font-weight: 600;
    font-size: 16px;
    line-height: 1.5;
    margin-left: 12px;
    color: ${({ theme }) => theme.color.woodsmoke};

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 13px;
        line-height: 1.3;
        margin-left: 8px;
    }
`;

export const Votes = styled.div`
    font-size: 16px;
    line-height: 1.5;
    margin-left: 12px;
    color: ${({ theme }) => theme.color.waterloo};

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 13px;
        line-height: 1.3;
        margin-left: 8px;
    }
`;
