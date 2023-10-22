function Turn_Right () {
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 120)
    basic.pause(1000)
    maqueen.motorStop(maqueen.Motors.All)
    maqueen.servoRun(maqueen.Servos.S1, 40)
    basic.pause(1000)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 95)
    basic.pause(1000)
    maqueen.motorStop(maqueen.Motors.All)
    basic.pause(1000)
}
function Turn_Left () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 120)
    basic.pause(1000)
    maqueen.motorStop(maqueen.Motors.All)
    maqueen.servoRun(maqueen.Servos.S1, 40)
    basic.pause(1000)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 95)
    basic.pause(1000)
    maqueen.motorStop(maqueen.Motors.All)
    basic.pause(1000)
}
huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.ALGORITHM_COLOR_RECOGNITION)
maqueen.servoRun(maqueen.Servos.S1, 40)
basic.forever(function () {
    huskylens.request()
    if (huskylens.isAppear(1, HUSKYLENSResultType_t.HUSKYLENSResultBlock) || huskylens.isAppear(2, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        maqueen.servoRun(maqueen.Servos.S1, 120)
        basic.pause(200)
    }
    if (huskylens.isAppear(1, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        Turn_Left()
    }
    if (huskylens.isAppear(2, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        Turn_Right()
    }
})
