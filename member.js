function skillsMember() {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            member: '='
        },
        templateUrl: 'templates/member.html'
    };
}