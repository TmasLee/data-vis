from abc import ABCMeta, abstractmethod


class AbsStrategy(metaclass=ABCMeta):
    dataset = [
        {
            'name': 'The Ancient One',
            'power': 85,
            'color': 'hsl(200,90%,61%)'
        },
        {
            'name': 'Dr. Strange',
            'power': 60,
            'color': 'hsl(144,90%,61%)'
        },
        {
            'name': 'Me',
            'power': 70,
            'color': 'hsl(155,90%,61%)'
        },
        {
            'name': 'Dormammu',
            'power': 100,
            'color': 'hsl(222,90%,61%)'
        },
        {
            'name': 'Mordo',
            'power': 10,
            'color': 'hsl(334,90%,61%)'
        }
    ]

    @abstractmethod
    def calculateSimilarity(self, max, min, person):
        pass

    @abstractmethod
    def calculateColor(self, person):
        pass
