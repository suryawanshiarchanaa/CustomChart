describe('BarChart', function() {

    var chart;

    afterEach(function() {
        if (chart) {
            chart.destroy();
            chart = null;
        }
    });

    describe('chartConfig', function() {
         it('should configure for stacking', function() {
            chart = Ext.create('BarChart', {
                enableStacking: true,
                chartData: {},
                loadMask: false
            });
         
            expect(chart.chartConfig.plotOptions.bar.showInLegend).toBe(true);
            expect(chart.chartConfig.plotOptions.bar.colorByPoint).toBe(false);
            expect(chart.chartConfig.tooltip).not.toBeDefined();
            expect(chart.chartConfig.yAxis.reversedStacks).toBe(false);
        });

        it('should configure for no stacking', function() {
            chart = Ext.create('BarChart', {
                enableStacking: false,
                chartData: {},
                loadMask: false
            });
         
            expect(chart.chartConfig.plotOptions.bar.showInLegend).toBe(false);
            expect(chart.chartConfig.plotOptions.bar.colorByPoint).toBe(true);
            expect(chart.chartConfig.tooltip).toEqual({
                headerFormat: '',
                pointFormat: '{point.name}: <b>{point.y}</b>'
            });
        });
    });

    describe('#_isData', function() {
        beforeEach(function() {
            chart = Ext.create('BarChart', {
                enableStacking: true,
                chartData: {},
                loadMask: false
            });
        });

        it('should return true for a value', function() {
            expect(chart._isData(5)).toBe(true);
        });

        it('should return true for a nested value', function() {
            expect(chart._isData({ y: 5 })).toBe(true);
        });

        it('should return false for an empty value', function() {
            expect(chart._isData()).toBe(false);
        });

        it('should return false for a 0 value', function() {
            expect(chart._isData(0)).toBe(false);
        });

        it('should return false for a nested 0 value', function() {
            expect(chart._isData({ y: 0 })).toBe(false);
        });
    });
});
