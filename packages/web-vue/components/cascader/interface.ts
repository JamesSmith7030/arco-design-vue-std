export interface CascaderOption {
  /**
   * @zh 选项值
   * @en Option value
   */
  value: string;
  /**
   * @zh 选项文本
   * @en Option text
   */
  label?: string;
  /**
   * @zh 是否禁用
   * @en Whether to disable
   */
  disabled?: boolean;
  /**
   * @zh 下一级选项
   * @en Next level options
   */
  children?: CascaderOption[];
  /**
   * @zh 是否是叶子节点
   * @en Whether it is a leaf node
   */
  isLeaf?: boolean;
}

export interface CascaderOptionWithTotal extends CascaderOption {
  children?: CascaderOptionWithTotal[];
  totalLeafOptions?: number;
}

export interface CascaderNode extends CascaderOption {
  parent?: CascaderNode;
  checked?: boolean;
  indeterminate?: boolean;
  level: number;
  index: number;
  path: CascaderNode[];
  children?: CascaderNode[];
  checkedValues?: Set<string>;
  nodes: CascaderNode[];
  enabledNodes: CascaderNode[];
  raw: CascaderOption;
}

export interface CascaderOptionInfo extends CascaderOptionWithTotal {
  label: string;
  disabled: boolean;
  key: string;
  level: number;
  index: number;
  isLeaf: boolean;
  path: CascaderOptionInfo[];
  children?: CascaderOptionInfo[];
  parent?: CascaderOptionInfo;
}
