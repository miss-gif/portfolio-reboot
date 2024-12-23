import { PostData } from "@/features/Board/types/type";
import { db } from "@/firebaseConfig";
import {
  addDoc,
  arrayRemove,
  arrayUnion,
  collection,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";

// 게시물 상세 조회
export const getPostById = async (docID: string): Promise<PostData> => {
  const docRef = doc(db, "posts", docID);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return { docID: docSnap.id, ...docSnap.data() } as PostData;
  } else {
    throw new Error("게시물을 찾을 수 없습니다.");
  }
};

// 게시물 생성
export const createPost = async (postData: {
  title: string;
  content: string;
  author: string;
}) => {
  try {
    const newPost = {
      ...postData,
      likes: 0,
      dislikes: 0,
      views: 0,
      createdAt: new Date(),
      likedBy: [],
      dislikedBy: [],
    };
    const docRef = await addDoc(collection(db, "posts"), newPost);
    return { id: docRef.id, ...newPost };
  } catch (error) {
    console.error("Error creating post:", error);
    throw new Error("게시물 생성 실패");
  }
};

// 게시물 수정
export const updatePost = async (
  docID: string,
  updatedData: { title?: string; content?: string; likes?: number },
) => {
  try {
    const postRef = doc(db, "posts", docID);
    await updateDoc(postRef, updatedData);
    return { id: docID, ...updatedData };
  } catch (error) {
    console.error("Error updating post:", error);
    throw new Error("게시물 수정 실패");
  }
};

// 게시물 삭제
export const deletePost = async (docID: string) => {
  try {
    const postRef = doc(db, "posts", docID);
    await deleteDoc(postRef);
    return { message: "게시물 삭제 성공", docID };
  } catch (error) {
    console.error("Error deleting post:", error);
    throw new Error("게시물 삭제 실패");
  }
};

// 게시물 좋아요 API
export const likePost = async (docID: string, userId: string) => {
  try {
    const postRef = doc(db, "posts", docID);
    // 게시물의 likedBy 배열에 사용자의 ID를 추가
    await updateDoc(postRef, {
      likedBy: arrayUnion(userId),
      dislikes: arrayRemove(userId), // 싫어요 취소
    });
    return { message: "게시물에 좋아요 등록 완료" };
  } catch (error) {
    console.error("Error liking post:", error);
    throw new Error("게시물 좋아요 등록 실패");
  }
};

// 게시물 좋아요 취소 API
export const unlikePost = async (docID: string, userId: string) => {
  try {
    const postRef = doc(db, "posts", docID);
    // 게시물의 likedBy 배열에서 사용자의 ID를 제거
    await updateDoc(postRef, {
      likedBy: arrayRemove(userId),
    });
    return { message: "게시물의 좋아요 취소 완료" };
  } catch (error) {
    console.error("Error unliking post:", error);
    throw new Error("게시물 좋아요 취소 실패");
  }
};

// 게시물 싫어요 API
export const dislikePost = async (docID: string, userId: string) => {
  try {
    const postRef = doc(db, "posts", docID);
    // 게시물의 dislikedBy 배열에 사용자의 ID를 추가
    await updateDoc(postRef, {
      dislikedBy: arrayUnion(userId),
      likedBy: arrayRemove(userId), // 좋아요 취소
    });
    return { message: "게시물에 싫어요 등록 완료" };
  } catch (error) {
    console.error("Error disliking post:", error);
    throw new Error("게시물 싫어요 등록 실패");
  }
};

// 게시물 싫어요 취소 API
export const undislikePost = async (docID: string, userId: string) => {
  try {
    const postRef = doc(db, "posts", docID);
    // 게시물의 dislikedBy 배열에서 사용자의 ID를 제거
    await updateDoc(postRef, {
      dislikedBy: arrayRemove(userId),
    });
    return { message: "게시물의 싫어요 취소 완료" };
  } catch (error) {
    console.error("Error undisliking post:", error);
    throw new Error("게시물 싫어요 취소 실패");
  }
};
