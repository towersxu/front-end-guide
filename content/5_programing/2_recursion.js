/**
 * 小明有爸爸，有妈妈，小明爸爸也有爸爸妈妈，小明爸爸的爸爸也有爸爸妈妈...结构如下面对象xiaoMingFamily：
 * 假设知道所有人的名字笔画数，找到其中笔画数最多的人,
 */
var xiaoMingFamily = {
  father: {
    nameLength: 19,
    father: {
      nameLength: 12,
      father: {
        nameLength: 11,
        father: {
          nameLength: 20
        }
      },
      mother: {
        nameLength: 21,
        father: {
          nameLength: 28
        },
        mother: {
          nameLength: 14,
          father: {
            nameLength: 15
          },
          mother: {
            nameLength: 23
          }
        }
      }
    }
  },
  mother: {
    nameLength: 42,
    father: {
      nameLength: 32,
      father: {
        nameLength: 15,
        mother: {
          nameLength: 20,
          father: {
            nameLength: 30
          }
        }
      },
      mother: {
        nameLength: 34,
        mother: {
          nameLength: 40
        }
      }
    },
    mother: {
      nameLength: 39
    }
  },
  nameLength: 11
}

function getMaxLength () {
  // todo:
}

var max = getMaxLength()
console.log(max)