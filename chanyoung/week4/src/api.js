//async와 await 키워드 사용해서 네트워크 리퀘스트를 기다렸다가 response에서 json함수를 호출하고, json 변환이 끝나면 body를 리턴해줌.
export async function getFoods() {
  const response = await fetch("https://learn.codeit.kr/7517/foods");
  const body = await response.json();
  return body;
}
