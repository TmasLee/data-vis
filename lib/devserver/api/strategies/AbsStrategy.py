from abc import ABC, abstractmethod, abstractproperty


class AbsStrategy(ABC):
    # def get(self):
    #     return self.getData()

    # def put(self):
    #     return self.randomizeData()

    @abstractmethod
    def getData(self):
        pass

    @abstractmethod
    def randomizeData(self):
        pass
