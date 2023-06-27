import { ColumnDef } from "@models/types";

const ColumnDefintion = (logEntityType: string, libraries: any, userTypes: any, dashboardReports: any, customReports: any): ColumnDef[] => {
    if (logEntityType === 'library') {
        return [
            {
                'colHeader': '',
                'property': 'toggle',
                'isSortableColumn': false,
                'width': '2'
            },
            {
                colHeader: 'Date Modified',
                property: 'logDate',
                isSortableColumn: false,
                width: '15'
            },
            {
                'colHeader': 'Library',
                'property': 'libraryName',
                'isSortableColumn': false,
                'width': '20'
            },
            {
                'colHeader': 'Action',
                'property': 'action',
                'isSortableColumn': false,
                'width': '43'
            },
            {
                'colHeader': 'Modified By',
                'property': 'userName',
                'isSortableColumn': false,
                'width': '20'
            }
        ];
    } else if (logEntityType === 'userTypePermission') {
        return [
            {
                'colHeader': '',
                'property': 'toggle',
                'isSortableColumn': false,
                'width': '2'
            },
            {
                'colHeader': 'Date Modified',
                'property': 'logDate',
                'isSortableColumn': false,
                'width': '15'
            },
            {
                'colHeader': 'User Type',
                'property': 'userTypeName',
                'isSortableColumn': false,
                'width': '20'
            },
            {
                'colHeader': 'Action',
                'property': 'action',
                'isSortableColumn': false,
                'width': '43'
            },
            {
                'colHeader': 'Modified By',
                'property': 'userName',
                'isSortableColumn': false,
                'width': '20'
            }
        ];
    } else if (logEntityType === 'DashboardReport') {
        return [
            {
                'colHeader': '',
                'property': 'toggle',
                'isSortableColumn': false,
                'width': '2'
            },
            {
                'colHeader': 'Date Modified',
                'property': 'logDate',
                'isSortableColumn': false,
                'width': '15'
            },
            {
                'colHeader': 'Report',
                'property': 'userTypeName',
                'isSortableColumn': false,
                'width': '20',
                'renderContent': function (rowData: any) {
                   
                    return '';
                }
            },
            {
                'colHeader': 'Action',
                'property': 'action',
                'isSortableColumn': false,
                'width': '43'
            },
            {
                'colHeader': 'Modified By',
                'property': 'userName',
                'isSortableColumn': false,
                'width': '20'
            }
        ];
    } else if (logEntityType === 'CustomReport') {
        return [
            {
                'colHeader': '',
                'property': 'toggle',
                'isSortableColumn': false,
                'width': '2'
            },
            {
                'colHeader': 'Date Modified',
                'property': 'logDate',
                'isSortableColumn': false,
                'width': '15'
            },
            {
                'colHeader': 'Report',
                'property': 'userTypeName',
                'isSortableColumn': false,
                'width': '20',
                'renderContent': function (rowData: any) {
                    
                    return '';
                }
            },
            {
                'colHeader': 'Action',
                'property': 'action',
                'isSortableColumn': false,
                'width': '43'
            },
            {
                'colHeader': 'Modified By',
                'property': 'userName',
                'isSortableColumn': false,
                'width': '20'
            }
        ];
    } else if (logEntityType === 'activityHistory') {
        return [
            {
                'colHeader': '',
                'property': 'toggle',
                'isSortableColumn': false,
                'width': '2'
            },
            {
                'colHeader': 'Date Modified',
                'property': 'logDate',
                'isSortableColumn': false,
                'width': '12'
            },
            {
                'colHeader': 'Patient',
                'property': 'patientName',
                'isSortableColumn': false,
                'width': '15',
                'renderContent': function (rowData: any) {
                    var patientId = rowData.patientId ? rowData.patientId : '';
                    var patientName = rowData.patientName ? rowData.patientName : '';
                    var content = patientName;

                    return content;
                }
            },
            {
                'colHeader': 'Form',
                'property': 'formName',
                'isSortableColumn': false,
                'width': '18',
                'renderContent': function (rowData: any) {
                    var entityId = rowData.entityId ? rowData.entityId : '';
                    var formName = rowData.formName ? rowData.formName : '';
                    var content = formName;

                    return content;
                }
            },
            {
                'colHeader': 'Action',
                'property': 'action',
                'isSortableColumn': false,
                'width': '32'
            },
            {
                'colHeader': 'Modified By',
                'property': 'userName',
                'isSortableColumn': false,
                'width': '16',
                'renderContent': function (rowData: any) {
                    var userId = rowData.userId ? rowData.userId : '';
                    var userName = rowData.userName ? rowData.userName : '';
                    var logId = rowData.logId;
                    var content = userName;

                    return content;
                }
            },
            {
                'colHeader': 'Page #',
                'property': 'pageNum',
                'isSortableColumn': false,
                'width': '4'
            }
        ];
    } else {
        return [
            {
                'colHeader': '',
                'property': 'toggle',
                'isSortableColumn': false,
                'width': '2'
            },
            {
                'colHeader': 'Date Modified',
                'property': 'logDate',
                'isSortableColumn': false,
                'width': '15'
            },
            {
                'colHeader': 'Patient',
                'property': 'patientName',
                'isSortableColumn': false,
                'width': '20'
            },
            {
                'colHeader': 'Action',
                'property': 'action',
                'isSortableColumn': false,
                'width': '43'
            },
            {
                'colHeader': 'Modified By',
                'property': 'userName',
                'isSortableColumn': false,
                'width': '20'
            }
        ];
    }
};

export default ColumnDefintion;