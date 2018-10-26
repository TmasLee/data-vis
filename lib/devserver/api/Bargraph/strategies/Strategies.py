from strategies import AbsStrategy


class AncientOne(AbsStrategy):
    def calculateSimilarity(self, max, min, person):
        # person.power = Math.floor(Math.random() * (max - min + 1) + min)
        return

    def calculateColor(self, person):
        return


class Mordo(AbsStrategy):
    def calculateSimilarity(self, max, min, person):
        return

    def calculateColor(self, person):
        return


class Dormammu(AbsStrategy):
    def calculateSimilarity(self, max, min, person):
        return

    def calculateColor(self, person):
        return


class Other(AbsStrategy):
    def calculateSimilarity(self, max, min, person):
        return

    def calculateColor(self, person):
        return
