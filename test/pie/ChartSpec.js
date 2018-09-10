describe('PieChart', function () {

    var chart;

    beforeEach(function () {
        chart = Ext.create('PieChart', {
            chartData: {},
            loadMask: false
        });
    });

    afterEach(function () {
        if (chart) {
            chart.destroy();
            chart = null;
        }
    });

    describe('chartConfig', function () {
        it('should configure tooltips', function () {
            expect(chart.chartConfig.tooltip.pointFormat).toBe('<b>{point.name}:</b> {point.percentage:.1f}% ({point.y}/{point.total})');
            expect(chart.chartConfig.plotOptions.pie.dataLabels.format).toBe('<b>{point.name}:</b> {point.percentage:.1f}% ({point.y}/{point.total})');
        });
    });

    describe('#_isData', function () {
        it('should return true for a value', function () {
            expect(chart._isData(5)).toBe(true);
        });

        it('should return true for a nested value', function () {
            expect(chart._isData({y: 5})).toBe(true);
        });

        it('should return false for an empty value', function () {
            expect(chart._isData()).toBe(false);
        });

        it('should return false for a 0 value', function () {
            expect(chart._isData(0)).toBe(false);
        });

        it('should return false for a nested 0 value', function () {
            expect(chart._isData({y: 0})).toBe(false);
        });
    });
});
