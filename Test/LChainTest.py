import os
os.environ["OPENAI_API_KEY"]=""

from langchain.llms import OpenAI
from langchain.chains import LLMChain
from langchain.memory import ConversationBufferMemory
from langchain.prompts import PromptTemplate

# 프롬프트 템플릿 정의
template = """생애사적 자서전을 작성할 때 다음 내용으로 쓸만한 다른 주제의 질문 3개를 해주세요:

{input}

질문:
1.
2.
3.
"""

prompt = PromptTemplate(input_variables=["input"], template=template)

# LLMChain 설정
llm = OpenAI(temperature=0.7)
memory = ConversationBufferMemory(input_key="input", memory_key="chat_history")
chain = LLMChain(llm=llm, prompt=prompt, memory=memory)

def generate_questions(sentence):
    response = chain.run(input=sentence)
    return response

if __name__ == "__main__":
    print("생애사적 자서전 작성을 위한 질문 생성기입니다. 각 입력에 대해 3개의 관련 질문을 생성합니다.")
    print("종료하려면 'exit'를 입력하세요. 대화 내용을 보려면 'history'를 입력하세요.\n")

    while True:
        user_input = input("문장을 입력해주세요: ")
        if user_input.lower() == "exit":
            break
        elif user_input.lower() == "history":
            print("\n대화 내용:")
            print(memory.chat_memory.messages)
            print("\n")
            continue

        questions = generate_questions(user_input)
        print("\n생성된 질문들:")
        print(questions)
        print("\n")