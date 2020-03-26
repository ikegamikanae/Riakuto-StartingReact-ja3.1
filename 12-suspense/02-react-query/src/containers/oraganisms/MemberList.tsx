import React, { FC } from 'react';
import { useQuery } from 'react-query';

import MemberList from 'components/organisms/MemberList';
import getMembers from 'domains/github/services/get-members';

const EnhancedMemberList: FC<{ orgCode: string }> = ({ orgCode }) => {
  const key = `orgs/${orgCode}/members`;
  const { data: users } = useQuery(key, () => getMembers(orgCode));

  return <MemberList users={users || []} />;
};

export default EnhancedMemberList;
