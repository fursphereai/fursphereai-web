from pydantic import BaseModel, Field
from typing import Literal
from openai import OpenAI
from pprint import pprint

client = OpenAI()


class MbtiOutput(BaseModel):

    m_label: Literal["Extraversion", "Introversion"]
    m_score: int = Field(description="A percentage score between 0 and 100")
    m_explanation: str = Field(description="150-200 characters")

    b_label: Literal["Sensing", "Intuition"]
    b_score: int = Field(description="A percentage score between 0 and 100")
    b_explanation: str = Field(description="150-200 characters")

    t_label: Literal["Thinking", "Feeling"]
    t_score: int = Field(description="A percentage score between 0 and 100")
    t_explanation: str = Field(description="150-200 characters")

    i_label: Literal["Judging", "Perceiving"]
    i_score: int = Field(description="A percentage score between 0 and 100")
    i_explanation: str = Field(description="150-200 characters")

    personal_speech: str = Field(
        description="""
        Something the pet would say to its owner or other people, if it could
        speak, according to its personality. 50-75 characters
        """,
    )

    third_person_diagnosis: str = Field(
        description="""
        A diagnosis of the pet's personality from a third-person perspective. Do
        not include anything already mentioned in the MBTI breakdowns, but
        describe what it might be like to spend time with this pet. 175-216
        characters
        """,
    )


completion = client.beta.chat.completions.parse(
    model="gpt-4o-2024-08-06",
    messages=[
        {
            "role": "system",
            "content": """
            You are an expert psychological therapist for pets. You are
            familiar with the MBTI test, which decomposes the psychological
            patterns of an animal into four dimensions. You do not echo
            anything the user says, but rather offers your own perspective on
            details. In carrying out your duty, it is permissible to pose
            hypotheses and fill in missing pieces yourself.
            """,
        },
        {"role": "user", "content": "My pet Mingming is timid. Why?"},
    ],
    response_format=MbtiOutput,
)

result = completion.choices[0].message.parsed
pprint(result.model_dump())
