import React from 'react';
import styled from 'styled-components';

const WelcomeContainer = styled.div`
 display: flex;
padding-right: var(--spacing-xl, 48px);
flex-direction: column;
justify-content: space-between;
align-items: flex-start;
flex: 1 0 0;
align-self: stretch;
`;

const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 30px;
`;

const InfoBox = styled.div`
  background-color: #f0f8ff;
  padding: 20px;
  border-radius: 8px;
`;

const InfoTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;

const InfoText = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 10px;
`;

const MemberHubButton = styled.button`
  background-color: #000;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
`;

const WelcomeSection = () => {
  return (
    <WelcomeContainer>
      <Title>Welcome! 👋<br />This is your<br />Artist Registry</Title>
      <Description>
        Your members can decide which records to upvote based on their ownership of your released editions or any other token. If you own the designated token, use the registry to vote for a release, or challenge a submission.
      </Description>
      <InfoBox>
        <InfoTitle>Looking for Payments?</InfoTitle>
        <InfoText>Navigate to the Metalabel page.</InfoText>
        <MemberHubButton>Member Hub</MemberHubButton>
      </InfoBox>
    </WelcomeContainer>
  );
};

export default WelcomeSection;