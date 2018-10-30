from abc import ABC, abstractmethod, abstractproperty


class AbsStrategy(ABC):
    # def __init__(self):
    #     super().__init__()

    # def get(self):
    #     return self.getData()

    # def put(self):
    #     return self.randomizeData()

    @abstractproperty
    def dataset(self):
        pass

    @abstractmethod
    def getData(self):
        pass

    @abstractmethod
    def randomizeData(self):
        pass
