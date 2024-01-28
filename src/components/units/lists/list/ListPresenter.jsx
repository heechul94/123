import styled from "styled-components";

const LetterWrapper = styled.article`
    padding: 1rem;
    border: 1px solid black;
    border-radius: 5px;
`;
const LetterHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    border-bottom: 1px solid black;
`;
const UserInfoWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;
const UserProfile = styled.img`
    width: 2rem;
    margin-right: 1rem;
    border-radius: 50%;
`;
const Content = styled.p`
    padding: 1rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

const ListPresenter = ({ item }) => {
    return (
        <LetterWrapper>
            <LetterHeader>
                <UserInfoWrapper>
                    <UserProfile src={item.avatar} alt="profile" />
                    <span>{item.nickname}</span>
                </UserInfoWrapper>
                <span>{item.createdAt}</span>
            </LetterHeader>
            <Content>{item.content}</Content>
        </LetterWrapper>
    );
};
export default ListPresenter;
