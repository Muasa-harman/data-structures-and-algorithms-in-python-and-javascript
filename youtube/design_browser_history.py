# 1472
# You have a browser of one tab where you start on the homepage and you can visit another url.
#  get back in the history number of steps or move forward in the history number of steps:

# Implement the BrowserHistory class:

# BrowserHistory(string homepage) Initializes the object with the homepage of the browser.
# Void visit(string url) Visits url from the current page. It clears up all the forward history
# string back (int steps) Move steps back in the history if you can only return x steps in the history and steps > x,
#  you will return only x steps. Return the current url after moving back in the history at most steps
# string forward (int steps) Move steps forward in history if you can only forward x steps in history and steps > x,
#  you will forward only x steps. Return the current url after forwarding in history at most steps.

# E.g.
# Input:
['BrowserHistory','Visit','Visit','back','back','forward']

class BrowserHistory:
    def __init__(self,homepage: str) -> None:
        self.history = [homepage]
        self.current_index = 0

    def visit(self,url: str) -> None:
        # self.history.append(url)
        self.current_index =+ 1
        self.history = self.history[0:self.current_index]
        self.history.append(url)

    def back(self,steps:int)-> None:
        self.current_index = max(0,self.current_index-steps)
        return self.history[self.current_index]

    def forward(self, steps: int)-> None:
        self.current_index = min(len(self.history)-1,self.current_index+steps)
        return self.history[self.current_index]

    # You browser history will be instantiated and called as such
    # obj = BrowserHistory(homepage)
    # obj.visit(url)
    # params_2 = obj.back(steps)
    # params_3 = obj.forward(steps)