import { getDate } from "shared/library/utils";
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
    const createdAtArr = item.createdAt.split(" ");
    const nowDate = getDate().split(" ")[0];
    const createdDate = createdAtArr[0];
    const createdHourMinute = createdAtArr[1];
    return (
        <li>
            <LetterWrapper>
                <LetterHeader>
                    <UserInfoWrapper>
                        <UserProfile src={item.avatar} alt="profile" />
                        <span>{item.nickName}</span>
                    </UserInfoWrapper>
                    <span>
                        {nowDate === createdDate
                            ? createdHourMinute
                            : createdDate}
                    </span>
                </LetterHeader>
                <Content>{item.content}</Content>
            </LetterWrapper>
        </li>
    );
};
export default ListPresenter;
