import { Link } from "react-router-dom";
import { convertedCreatedAt } from "shared/library/utils";
import styled from "styled-components";

const ListWrapper = styled(Link)`
  display: block;
  max-width: 1200px;
  margin: 1rem auto;
`;
const List = styled.li``;
const LetterWrapper = styled.article`
  padding: 1rem;
  color: white;
  border: none;
  border-radius: 10px;
  background-color: #ffffff40;
  backdrop-filter: blur(5px);
  box-shadow: 0rem 0.1rem 1rem #00000050;
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
  width: 50rem;
`;
const UserProfile = styled.img`
  width: 4rem;
  padding: 0.5rem;
  margin-right: 1rem;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0rem 0.1rem 0.3rem #00000050;
`;
const Content = styled.p`
  padding: 1rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const ListContainer = ({ item }) => {
  return (
    <ListWrapper to={`detail/${item.id}`}>
      <List>
        <LetterWrapper>
          <LetterHeader>
            <UserInfoWrapper>
              <UserProfile src={item.avatar} alt="profile" />
              <span>{item.nickName}</span>
            </UserInfoWrapper>
            <span>{convertedCreatedAt(item.createdAt)}</span>
          </LetterHeader>
          <Content>{item.content}</Content>
        </LetterWrapper>
      </List>
    </ListWrapper>
  );
};
export default ListContainer;
