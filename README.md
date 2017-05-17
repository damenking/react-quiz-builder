# react-quiz-builder

__Functionality__
- Create/edit/delete topics
- Create/edit/delete questions
- Questions are organized by topic
- View topics by question or ALL topics
- Topics are assigned current user as 'owner' on creation
- Topic API filters by current user
- Questions can be true/false, multiple choice or freeform/fill-in-the-blank
- Each type of question has the appropriate form/user interface
- Tests can be taken on one or all topics
- Tests are graded and visually display right or wrong answers
- Test questions are randomly sequenced as are multiple choice question answers

__Dependencies__

- pip djangorestframework django-decorator-include django-webpack-loader
- node (legacy not nodejs)
- npm babel-core babel-loader babel-preset-es2015 babel-preset-react jquery react react-dom webpack webpack-bundle-tracker

back-end Django-React with webpack setup done following my tutorial at https://github.com/damenking/react-django-setup-walkthrough-and-example

deployed app: http://thedayman.com/ (login using demo/demo and navigate to quiz builder!)

Other thoughts:

This is my first real React app and the most complex web app I've made to date.  If I were to redo this I would certainly look deeper into utilizing the Redux paradigm to centralize my state as this started to get disorganized as the app grew.  In particular when I added the 'topic' concept, there were so many other components that needed to interact with this that select_topic.js became sort of a hub of state and functions which was not desired.  Please read my blog post at http://damenking.com/blog.html#blog-12 for more insights.
