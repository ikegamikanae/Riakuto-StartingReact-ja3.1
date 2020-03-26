import React, { FC } from 'react';
import { Card, Image } from 'semantic-ui-react';

import { User } from 'domains/github/models/user';

export interface MemberListProps {
  users: User[];
}

const MemberList: FC<MemberListProps> = ({ users = [] }) => (
  <>
    <Card.Group>
      {users.map((user) => (
        <Card
          key={user.id}
          href={`https://github.com/${user.login}`}
          target="_blank"
        >
          <Card.Content>
            <Image floated="right" size="mini" src={user.avatar_url} />
            <Card.Header>{user.login}</Card.Header>
            <Card.Meta>GitHub ID: {user.id}</Card.Meta>
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
  </>
);

export default MemberList;
