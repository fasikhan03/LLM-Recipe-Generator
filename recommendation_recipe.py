from openai import OpenAI
import pandas as pd
import numpy as np
from dotenv import load_dotenv


load_dotenv() 
#load_dotenv() is a function that loads variables from a .env file into environment variables in a Python script. 
# We store OPENAI_API_KEY = xxx in .env file
df = pd.read_csv("", sep='\t')
client = OpenAI()

MODEL_NAME = "text-embedding-ada-002"

def get_embedding(text, model=MODEL_NAME):
    if not isinstance(text, str):
        text = str(text)
    
    text = text.replace("\n", " ")
    return client.embeddings.create(input=[text], model=model).data[0].embedding

def cosine_similarity(a, b):
    return np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b))

def search_docs(df, user_query, threshold=0.8):
    embedding = get_embedding(user_query, model=MODEL_NAME)
    df["similarities"] = df.embedding.apply(lambda x: cosine_similarity(x, embedding))
    
    # Filter results based on the threshold
    filtered_results = df[df["similarities"] > threshold]
    
    return filtered_results



df['embedding'] = df['overview'].apply(lambda x: get_embedding(x, model=MODEL_NAME))

title = "Toy Story"
description = df.loc[df["title"] == title, "overview"].iloc[0]
result = search_docs(df, description, threshold=0.8)

#remove the search item
print(result[result["title"] != title]['title'])
