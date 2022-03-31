import numpy as np
import pandas as pd
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score
import pickle

dataset = pd.read_csv("dataset.csv")
# preparing data
dataset.drop('id', axis=1, inplace=True)

# set inputs and outputs
#Dataset without dependent variable values
x = dataset.drop('user_status',axis = 1)
#Dependent variable values
y = dataset['user_status']

# data scaling
scaler = StandardScaler()
data_scaled = scaler.fit_transform(x)
df_scaled = pd.DataFrame(data_scaled)

X_train, X_test, y_train, y_test = train_test_split(x, y, test_size=0.30, random_state=42)

# LR model
model = LogisticRegression(C=0.1, max_iter=500)
# LR model training
model.fit(X_train, y_train)

# LR testing/prediction
y_pred = model.predict(X_test)

print(f'Test accuracy: {model.score(X_test,y_test)}')
print("Accuracy:", accuracy_score(y_test,y_pred))

pickle.dump(model, open("model.pkl", "wb"))