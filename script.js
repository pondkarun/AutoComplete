
angular
  .module('MyApp', ['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])
  .controller('DemoCtrl', DemoCtrl);

function DemoCtrl($timeout, $q, $log) {
  var _this = this;
  _this.modelSave = {
    Name: null
  }
  this.dataList = [
    {
      Name: "pond1"
    },
    {
      Name: "pond2"
    },
    {
      Name: "pond3"
    },
    {
      Name: "pond4"
    },
    {
      Name: "pond5"
    },
  ]

  ////////////Auto Complete//////////////////////////////////////
  this.config = {
    isDisabled: false,
    noCache: true,
    selectedItem: undefined,
    searchText: undefined,
  };


  this.searchText = (item) => {
    if (item) {
      _this.modelSave.Name = item;
    } else {
      _this.modelSave.Name = undefined;
    }
  }


  this.selectedItem = (item) => {

    if (item) {
      _this.config.selectedItem = item;
      _this.modelSave.Name = item.Name;
    }
  }



  this.querySearch = (query) => {
    var results = query ? _this.dataList.filter(this.createFilterFor(query)) : _this.dataList;
    return results;
  }
  this.createFilterFor = (query) => {
    var lowercaseQuery = angular.copy(query);

    return function filterFn(item) {
      return ((item.Name).search(new RegExp('(' + lowercaseQuery + ')', 'gi')) != -1);
    };
  }

  this.selectedItem({ Name: "pond1" });
  ////////////END Auto Complete//////////////////////////////////////
}





