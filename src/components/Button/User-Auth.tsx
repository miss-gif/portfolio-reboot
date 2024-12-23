import { useAuthStore } from "@/stores/authStore";
import { ReactElement, cloneElement } from "react";
import { toast } from "react-toastify";

// 로그인 여부에 따라 클릭 이벤트를 막는 컴포넌트

interface UserAuthProps {
  children: ReactElement;
}

const UserAuth = ({ children }: UserAuthProps) => {
  const { user } = useAuthStore();

  const handleClick = (e: React.MouseEvent) => {
    if (!user) {
      e.preventDefault(); // 기본 동작 차단
      toast.error("로그인이 필요합니다.");
    }
  };

  // 자식 컴포넌트에 클릭 이벤트 주입
  return cloneElement(children, { onClick: handleClick });
};

export default UserAuth;
