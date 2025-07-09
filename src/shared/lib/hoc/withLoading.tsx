import type { ComponentType } from "react";

type WithLoadingComponentProps<T> = T & {
  isLoading: boolean;
};

function withLoading<T extends object>(
  WrappedComponent: ComponentType<T>,
  SkeletonComponent: ComponentType
) {
  return function WithLoadingComponent(props: WithLoadingComponentProps<T>) {
    const { isLoading, ...restProps } = props;

    return isLoading ? <SkeletonComponent /> : <WrappedComponent {...(restProps as T)} />;
  };
}

export default withLoading;
