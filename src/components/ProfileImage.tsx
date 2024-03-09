import styled from "styled-components";

type Sizes = "sm" | "md" | "lg";

type ProfileSizes = {
  [key in Sizes]: string;
};

const profileSizes: ProfileSizes = {
  sm: "80px",
  md: "120px",
  lg: "230px",
};

interface IProfileProps {
  imageUrl?: string;
  size?: Sizes;
}

const ProfileBox = styled.div<{ widthSize?: Sizes }>`
  width: ${(props) => (props.widthSize ? profileSizes[props.widthSize] : null)};
  height: 320px;
  border-radius: 8px;
  overflow: hidden;
  background-color: tomato;
`;

const Profile = styled.div<{ $imageUrl?: string }>`
  min-height: 320px;
  transition: transform 0.8s ease;
  background-image: url(${(props) => props.$imageUrl});
  background-position: center;
  background-size: cover;
`;

function ProfileImage({ imageUrl, size }: IProfileProps) {
  return (
    <ProfileBox widthSize={size}>
      <Profile $imageUrl={imageUrl} />
    </ProfileBox>
  );
}

export default ProfileImage;
