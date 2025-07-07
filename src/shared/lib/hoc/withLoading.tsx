import type { ComponentType } from "react";
import styles from "./withLoading.module.css";

type WithLoadingComponentProps<T> = T & {
  isLoading: boolean;
};

function withLoading<T extends object>(WrappedComponent: ComponentType<T>) {
  return function WithLoadingComponent(props: WithLoadingComponentProps<T>) {
    const { isLoading, ...restProps } = props;

    if (isLoading) {
      return <div className={styles.container}>Загрузка...</div>;
    }

    return <WrappedComponent {...(restProps as T)} />;
  };
}

export default withLoading;
