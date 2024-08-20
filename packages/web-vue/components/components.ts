// @ts-nocheck
import { MessageMethod } from './message';
import { NotificationMethod } from './notification';
import { ModalMethod } from './modal';
import { DrawerMethod } from './drawer';

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    ArcoAffix: typeof import('@arco-design/web-vue')['Affix'];
    ArcoAlert: typeof import('@arco-design/web-vue')['Alert'];
    ArcoAnchor: typeof import('@arco-design/web-vue')['Anchor'];
    ArcoAnchorLink: typeof import('@arco-design/web-vue')['AnchorLink'];
    ArcoAutoComplete: typeof import('@arco-design/web-vue')['AutoComplete'];
    ArcoAvatar: typeof import('@arco-design/web-vue')['Avatar'];
    ArcoAvatarGroup: typeof import('@arco-design/web-vue')['AvatarGroup'];
    ArcoBackTop: typeof import('@arco-design/web-vue')['BackTop'];
    ArcoBadge: typeof import('@arco-design/web-vue')['Badge'];
    ArcoBreadcrumb: typeof import('@arco-design/web-vue')['Breadcrumb'];
    ArcoBreadcrumbItem: typeof import('@arco-design/web-vue')['BreadcrumbItem'];
    ArcoButton: typeof import('@arco-design/web-vue')['Button'];
    ArcoButtonGroup: typeof import('@arco-design/web-vue')['ButtonGroup'];
    ArcoCalendar: typeof import('@arco-design/web-vue')['Calendar'];
    ArcoCard: typeof import('@arco-design/web-vue')['Card'];
    ArcoCardMeta: typeof import('@arco-design/web-vue')['CardMeta'];
    ArcoCardGrid: typeof import('@arco-design/web-vue')['CardGrid'];
    ArcoCarousel: typeof import('@arco-design/web-vue')['Carousel'];
    ArcoCarouselItem: typeof import('@arco-design/web-vue')['CarouselItem'];
    ArcoCascader: typeof import('@arco-design/web-vue')['Cascader'];
    ArcoCascaderPanel: typeof import('@arco-design/web-vue')['CascaderPanel'];
    ArcoCheckbox: typeof import('@arco-design/web-vue')['Checkbox'];
    ArcoCheckboxGroup: typeof import('@arco-design/web-vue')['CheckboxGroup'];
    ArcoCollapse: typeof import('@arco-design/web-vue')['Collapse'];
    ArcoCollapseItem: typeof import('@arco-design/web-vue')['CollapseItem'];
    ArcoColorPicker: typeof import('@arco-design/web-vue')['ColorPicker'];
    ArcoComment: typeof import('@arco-design/web-vue')['Comment'];
    ArcoConfigProvider: typeof import('@arco-design/web-vue')['ConfigProvider'];
    ArcoDatePicker: typeof import('@arco-design/web-vue')['DatePicker'];
    ArcoWeekPicker: typeof import('@arco-design/web-vue')['WeekPicker'];
    ArcoMonthPicker: typeof import('@arco-design/web-vue')['MonthPicker'];
    ArcoYearPicker: typeof import('@arco-design/web-vue')['YearPicker'];
    ArcoQuarterPicker: typeof import('@arco-design/web-vue')['QuarterPicker'];
    ArcoRangePicker: typeof import('@arco-design/web-vue')['RangePicker'];
    ArcoDescriptions: typeof import('@arco-design/web-vue')['Descriptions'];
    ArcoDescriptionsItem: typeof import('@arco-design/web-vue')['DescriptionsItem'];
    ArcoDivider: typeof import('@arco-design/web-vue')['Divider'];
    ArcoDrawer: typeof import('@arco-design/web-vue')['Drawer'];
    ArcoDropdown: typeof import('@arco-design/web-vue')['Dropdown'];
    ArcoDoption: typeof import('@arco-design/web-vue')['Doption'];
    ArcoDgroup: typeof import('@arco-design/web-vue')['Dgroup'];
    ArcoDsubmenu: typeof import('@arco-design/web-vue')['Dsubmenu'];
    ArcoEmpty: typeof import('@arco-design/web-vue')['Empty'];
    ArcoForm: typeof import('@arco-design/web-vue')['Form'];
    ArcoFormItem: typeof import('@arco-design/web-vue')['FormItem'];
    ArcoGrid: typeof import('@arco-design/web-vue')['Grid'];
    ArcoGridItem: typeof import('@arco-design/web-vue')['GridItem'];
    ArcoCol: typeof import('@arco-design/web-vue')['Col'];
    ArcoRow: typeof import('@arco-design/web-vue')['Row'];
    ArcoImage: typeof import('@arco-design/web-vue')['Image'];
    ArcoImagePreview: typeof import('@arco-design/web-vue')['ImagePreview'];
    ArcoImagePreviewAction: typeof import('@arco-design/web-vue')['ImagePreviewAction'];
    ArcoImagePreviewGroup: typeof import('@arco-design/web-vue')['ImagePreviewGroup'];
    ArcoInput: typeof import('@arco-design/web-vue')['Input'];
    ArcoInputGroup: typeof import('@arco-design/web-vue')['InputGroup'];
    ArcoInputSearch: typeof import('@arco-design/web-vue')['InputSearch'];
    ArcoInputPassword: typeof import('@arco-design/web-vue')['InputPassword'];
    ArcoInputNumber: typeof import('@arco-design/web-vue')['InputNumber'];
    ArcoInputTag: typeof import('@arco-design/web-vue')['InputTag'];
    ArcoLayout: typeof import('@arco-design/web-vue')['Layout'];
    ArcoLayoutHeader: typeof import('@arco-design/web-vue')['LayoutHeader'];
    ArcoLayoutContent: typeof import('@arco-design/web-vue')['LayoutContent'];
    ArcoLayoutFooter: typeof import('@arco-design/web-vue')['LayoutFooter'];
    ArcoLayoutSider: typeof import('@arco-design/web-vue')['LayoutSider'];
    ArcoLink: typeof import('@arco-design/web-vue')['Link'];
    ArcoList: typeof import('@arco-design/web-vue')['List'];
    ArcoListItem: typeof import('@arco-design/web-vue')['ListItem'];
    ArcoListItemMeta: typeof import('@arco-design/web-vue')['ListItemMeta'];
    ArcoMention: typeof import('@arco-design/web-vue')['Mention'];
    ArcoMenu: typeof import('@arco-design/web-vue')['Menu'];
    ArcoMenuItem: typeof import('@arco-design/web-vue')['MenuItem'];
    ArcoMenuItemGroup: typeof import('@arco-design/web-vue')['MenuItemGroup'];
    ArcoSubMenu: typeof import('@arco-design/web-vue')['SubMenu'];
    ArcoModal: typeof import('@arco-design/web-vue')['Modal'];
    ArcoPageHeader: typeof import('@arco-design/web-vue')['PageHeader'];
    ArcoPagination: typeof import('@arco-design/web-vue')['Pagination'];
    ArcoPopconfirm: typeof import('@arco-design/web-vue')['Popconfirm'];
    ArcoPopover: typeof import('@arco-design/web-vue')['Popover'];
    ArcoProgress: typeof import('@arco-design/web-vue')['Progress'];
    ArcoRadio: typeof import('@arco-design/web-vue')['Radio'];
    ArcoRadioGroup: typeof import('@arco-design/web-vue')['RadioGroup'];
    ArcoRate: typeof import('@arco-design/web-vue')['Rate'];
    ArcoResizeBox: typeof import('@arco-design/web-vue')['ResizeBox'];
    ArcoResult: typeof import('@arco-design/web-vue')['Result'];
    ArcoSelect: typeof import('@arco-design/web-vue')['Select'];
    ArcoOption: typeof import('@arco-design/web-vue')['Option'];
    ArcoOptgroup: typeof import('@arco-design/web-vue')['Optgroup'];
    ArcoSkeleton: typeof import('@arco-design/web-vue')['Skeleton'];
    ArcoSkeletonLine: typeof import('@arco-design/web-vue')['SkeletonLine'];
    ArcoSkeletonShape: typeof import('@arco-design/web-vue')['SkeletonShape'];
    ArcoSlider: typeof import('@arco-design/web-vue')['Slider'];
    ArcoSpace: typeof import('@arco-design/web-vue')['Space'];
    ArcoSpin: typeof import('@arco-design/web-vue')['Spin'];
    ArcoSplit: typeof import('@arco-design/web-vue')['Split'];
    ArcoStatistic: typeof import('@arco-design/web-vue')['Statistic'];
    ArcoCountdown: typeof import('@arco-design/web-vue')['Countdown'];
    ArcoSteps: typeof import('@arco-design/web-vue')['Steps'];
    ArcoStep: typeof import('@arco-design/web-vue')['Step'];
    ArcoSwitch: typeof import('@arco-design/web-vue')['Switch'];
    ArcoTable: typeof import('@arco-design/web-vue')['Table'];
    ArcoThead: typeof import('@arco-design/web-vue')['Thead'];
    ArcoTd: typeof import('@arco-design/web-vue')['Td'];
    ArcoTh: typeof import('@arco-design/web-vue')['Th'];
    ArcoTr: typeof import('@arco-design/web-vue')['Tr'];
    ArcoTbody: typeof import('@arco-design/web-vue')['Tbody'];
    ArcoTableColumn: typeof import('@arco-design/web-vue')['TableColumn'];
    ArcoTabs: typeof import('@arco-design/web-vue')['Tabs'];
    ArcoTabPane: typeof import('@arco-design/web-vue')['TabPane'];
    ArcoTag: typeof import('@arco-design/web-vue')['Tag'];
    ArcoTextarea: typeof import('@arco-design/web-vue')['Textarea'];
    ArcoTimePicker: typeof import('@arco-design/web-vue')['TimePicker'];
    ArcoTimeline: typeof import('@arco-design/web-vue')['Timeline'];
    ArcoTimelineItem: typeof import('@arco-design/web-vue')['TimelineItem'];
    ArcoTooltip: typeof import('@arco-design/web-vue')['Tooltip'];
    ArcoTransfer: typeof import('@arco-design/web-vue')['Transfer'];
    ArcoTree: typeof import('@arco-design/web-vue')['Tree'];
    ArcoTreeSelect: typeof import('@arco-design/web-vue')['TreeSelect'];
    ArcoTrigger: typeof import('@arco-design/web-vue')['Trigger'];
    ArcoTypography: typeof import('@arco-design/web-vue')['Typography'];
    ArcoTypographyParagraph: typeof import('@arco-design/web-vue')['TypographyParagraph'];
    ArcoTypographyTitle: typeof import('@arco-design/web-vue')['TypographyTitle'];
    ArcoTypographyText: typeof import('@arco-design/web-vue')['TypographyText'];
    ArcoUpload: typeof import('@arco-design/web-vue')['Upload'];
    ArcoVerificationCode: typeof import('@arco-design/web-vue')['VerificationCode'];
    ArcoWatermark: typeof import('@arco-design/web-vue')['Watermark'];
  }

  export interface ComponentCustomProperties {
    $message: MessageMethod;
    $notification: NotificationMethod;
    $modal: ModalMethod;
    $drawer: DrawerMethod;
  }
}

export {};
